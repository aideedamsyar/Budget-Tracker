import { Button, Stack } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import AddBudgetModal from "./components/AddBudgetModal"
import AddExpenseModal from "./components/AddExpenseModal"
import ViewExpensesModal from "./components/ViewExpensesModal"
import BudgetCard from "./components/BudgetCard"
import UncategorizedBudgetCard from "./components/UncategorizedBudgetCard"
import TotalBudgetCard from "./components/TotalBudgetCard"
import IncomeCard from "./components/IncomeCard"
import { useState } from "react"
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "./contexts/BudgetsContext"
import LottieAnimation from './components/LottieAnimation';
import animationData from './media/animation.json'; 
import ResponsiveLottieAnimation from "./components/LottieAnimation"
import LogoSvg from './media/unbroker.svg'
import './styles.css'


function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState()
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
  const { budgets, getBudgetExpenses } = useBudgets()

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true)
    setAddExpenseModalBudgetId(budgetId)
  }

  return (
  <>
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        {/* <h1 className="me-auto">Budgets</h1> */}
        <h1 className="me-auto">
        <img src={LogoSvg} alt="Logo" className="logo" />

        </h1>

        <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>
          Add Budget
        </Button>
        <Button variant="outline-primary" onClick={openAddExpenseModal}>
          Add Expense
        </Button>
      </Stack>
      {budgets.length === 0 && (
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', // Stack children vertically
          justifyContent: 'center', // Center children vertically in the container
          alignItems: 'center', // Center children horizontally
          height: '100vh', // This takes the full viewport height
          width: '100vw', // This takes the full viewport width
          position: 'fixed', // Ensure it covers the entire screen without affecting the document flow
          top: -100,
          left: 0,
          zIndex: -1 // Send it to the back if you have other content you want to overlay
        }}>
          <ResponsiveLottieAnimation animationData={animationData} />
          <p style={{ 
            position: 'absolute', 
            bottom: '15%', // Adjust this to move closer/further from the bottom
            width: '80%', // This sets the max width of the <p> tag to 80% of its parent
            textAlign: 'center', // Centers the text within the <p> tag
            margin: '0 auto', // Automatically adjust margins to center the <p> tag
            padding: '0 20px', // Adds padding inside the <p> tag, useful if the text is too long
            maxWidth: '500px', // Ensures that the text container does not become too wide on larger screens
            fontSize: '1.1rem' 
          }}>
            Click on "Add Budget" to start adding your budget.
            All changes are automatically saved locally so you can come back anytime. No worries!
          </p>

        </div>
      )}
      <div
        style={{
          display: budgets.length === 0 ? "none" : "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1rem",
          alignItems: "flex-start",
        }}
      >
        {budgets.map(budget => {
          const amount = getBudgetExpenses(budget.id).reduce(
            (total, expense) => total + expense.amount,
            0
          );
          return (
            <BudgetCard
              key={budget.id}
              name={budget.name}
              amount={amount}
              max={budget.max}
              onAddExpenseClick={() => openAddExpenseModal(budget.id)}
              onViewExpensesClick={() =>
                setViewExpensesModalBudgetId(budget.id)
              }
            />
          );
        })}
        <UncategorizedBudgetCard
          onAddExpenseClick={openAddExpenseModal}
          onViewExpensesClick={() =>
            setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)
          }
        />
        <TotalBudgetCard />
      </div>
    </Container>
    <AddBudgetModal
      show={showAddBudgetModal}
      handleClose={() => setShowAddBudgetModal(false)}
    />
    <AddExpenseModal
      show={showAddExpenseModal}
      defaultBudgetId={addExpenseModalBudgetId}
      handleClose={() => setShowAddExpenseModal(false)}
    />
    <ViewExpensesModal
      budgetId={viewExpensesModalBudgetId}
      handleClose={() => setViewExpensesModalBudgetId()}
    />
  </>

  )
}

export default App