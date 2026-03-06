import { Link } from "react-router-dom";
import {
  Users,
  FileText,
  BarChart3,
  BookOpen,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import "../styles/admin.css";

export default function AdminDashboardPage() {
  return (
    <main className="admin-page">
      <aside className="admin-sidebar">
        <div className="admin-logo">SmartPrep Admin</div>

        <nav className="admin-nav">
          <a href="#" className="admin-nav-item active">
            <LayoutDashboard size={18} />
            Dashboard
          </a>
          <a href="#" className="admin-nav-item">
            <Users size={18} />
            Students
          </a>
          <a href="#" className="admin-nav-item">
            <BookOpen size={18} />
            Exams
          </a>
          <a href="#" className="admin-nav-item">
            <FileText size={18} />
            Questions
          </a>
          <a href="#" className="admin-nav-item">
            <BarChart3 size={18} />
            Analytics
          </a>
        </nav>

        <Link to="/" className="admin-logout">
              <LogOut size={18} />
                   Logout
         </Link>
      </aside>

      <section className="admin-main">
        <div className="admin-topbar">
          <div>
            <h1>Dashboard Overview</h1>
            <p>Monitor platform usage, exam activity, and learner performance.</p>
          </div>
        </div>

        <div className="admin-stats-grid">
          <div className="admin-stat-card">
            <span>Total Students</span>
            <strong>5,284</strong>
          </div>

          <div className="admin-stat-card">
            <span>Active Exams</span>
            <strong>18</strong>
          </div>

          <div className="admin-stat-card">
            <span>Question Bank</span>
            <strong>12,450</strong>
          </div>

          <div className="admin-stat-card">
            <span>Avg. Score</span>
            <strong>76%</strong>
          </div>
        </div>

        <div className="admin-content-grid">
          <div className="admin-panel large">
            <h2>Recent Exam Activity</h2>

            <div className="admin-table">
              <div className="admin-table-row header">
                <span>Student</span>
                <span>Exam</span>
                <span>Score</span>
                <span>Status</span>
              </div>

              <div className="admin-table-row">
                <span>David Johnson</span>
                <span>JAMB Mock</span>
                <span>82%</span>
                <span className="status-pill success">Completed</span>
              </div>

              <div className="admin-table-row">
                <span>Mary Yusuf</span>
                <span>WAEC English</span>
                <span>74%</span>
                <span className="status-pill success">Completed</span>
              </div>

              <div className="admin-table-row">
                <span>Samuel Peter</span>
                <span>Post-UTME Math</span>
                <span>Pending</span>
                <span className="status-pill pending">In Progress</span>
              </div>
            </div>
          </div>

          <div className="admin-panel">
            <h2>Quick Actions</h2>
            <div className="quick-actions">
              <button className="quick-action-btn">Add New Exam</button>
              <button className="quick-action-btn">Upload Questions</button>
              <button className="quick-action-btn">View Reports</button>
              <button className="quick-action-btn">Manage Students</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}