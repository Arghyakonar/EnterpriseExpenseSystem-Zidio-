package com.eems.EEMS; // Make sure the package matches

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin(origins = "http://localhost:3000") // Enable CORS for React
public class ExpenseController {

    @Autowired
    private ExpenseRepository expenseRepository;

    @GetMapping
    public List<Expense> getExpenses() {
        return expenseRepository.findAll();
    }

    @PostMapping
    public Expense addExpense(@RequestBody Expense expense) {
        return expenseRepository.save(expense);
    }

    @PutMapping("/{id}/approve")
    public Expense approveExpense(@PathVariable Long id) {
        Expense expense = expenseRepository.findById(id).orElse(null);
        if (expense != null) {
            expense.setStatus("approved");
            return expenseRepository.save(expense);
        }
        return null;
    }

    @PutMapping("/{id}/reject")
    public Expense rejectExpense(@PathVariable Long id) {
        Expense expense = expenseRepository.findById(id).orElse(null);
        if (expense != null) {
            expense.setStatus("rejected");
            return expenseRepository.save(expense);
        }
        return null;
    }
}