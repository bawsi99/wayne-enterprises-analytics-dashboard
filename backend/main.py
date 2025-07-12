from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import os

app = FastAPI(
    title="Wayne Enterprises Dashboard API",
    description="Business intelligence dashboard API for Wayne Enterprises",
    version="1.0.0"
)

# CORS configuration for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",    # Next.js default port
        "http://127.0.0.1:3000",   # Next.js alternative
        "https://wayne-enterprises-dashboard.vercel.app",  # Production domain (adjust as needed)
    ],
    allow_credentials=True,
    allow_methods=["GET"],  # Only allow GET methods for this read-only API
    allow_headers=["*"],
)

DATA_DIR = os.path.join(os.path.dirname(__file__), "data")

@app.get("/")
def read_root():
    return {"message": "Wayne Enterprises Dashboard API is running."}

@app.get("/summary")
def get_summary():
    # Financial summary
    fin = pd.read_csv(os.path.join(DATA_DIR, "financial_data.csv"))
    total_revenue = float(fin["revenue"].sum())
    total_profit = float(fin["profit"].sum())
    # HR summary
    hr = pd.read_csv(os.path.join(DATA_DIR, "hr_data.csv"))
    total_employees = int(hr["employees"].sum())
    avg_salary = float(round((hr["avg_salary"] * hr["employees"]).sum() / total_employees, 2))
    return {
        "total_revenue": total_revenue,
        "total_profit": total_profit,
        "total_employees": total_employees,
        "avg_salary": avg_salary
    }

@app.get("/revenue-trends")
def get_revenue_trends():
    fin = pd.read_csv(os.path.join(DATA_DIR, "financial_data.csv"))
    return {
        "years": fin["year"].tolist(),
        "revenue": fin["revenue"].tolist(),
        "profit": fin["profit"].tolist()
    }

@app.get("/department-performance")
def get_department_performance():
    hr = pd.read_csv(os.path.join(DATA_DIR, "hr_data.csv"))
    return {
        "departments": hr["department"].tolist(),
        "employees": hr["employees"].tolist(),
        "avg_salary": hr["avg_salary"].tolist()
    }

@app.get("/employee-distribution")
def get_employee_distribution():
    hr = pd.read_csv(os.path.join(DATA_DIR, "hr_data.csv"))
    return {
        "departments": hr["department"].tolist(),
        "employees": hr["employees"].tolist()
    }

@app.get("/data-narrative")
def get_data_narrative():
    fin = pd.read_csv(os.path.join(DATA_DIR, "financial_data.csv"))
    headline = "Wayne Enterprises Achieves Record Revenue Growth in 2023"
    supporting = {
        "year": fin["year"].tolist(),
        "revenue": fin["revenue"].tolist(),
        "profit": fin["profit"].tolist()
    }
    narrative = (
        "In 2023, Wayne Enterprises reported its highest ever revenue, "
        "demonstrating strong growth across all divisions. The company's "
        "commitment to innovation and operational excellence has resulted in "
        "a significant increase in both revenue and profit over the past four years."
    )
    return {
        "headline": headline,
        "narrative": narrative,
        "supporting": supporting
    }
