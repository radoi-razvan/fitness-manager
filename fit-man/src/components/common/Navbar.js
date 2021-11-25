import React, { useState } from "react";
import { BrowserRouter, Route, NavLink, Link } from "react-router-dom";
import { GymList } from "../GymList";

export const Navbar = () => {
  return (
    <BrowserRouter>
      <div className="container d-flex align-items-center">
        <NavLink exact to="/">FitMan</NavLink >
        <nav id="navbar">
          <ul>
            <li>
              <NavLink exact to="/api/gyms">Gyms</NavLink >             
            </li>
            <li>
              <NavLink  to="/api/register">Register</NavLink>
            </li>
            <li>
              <NavLink  to="/api/login">Login</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </BrowserRouter>
  );
};

// <Route
//           path="/"
//           exact
//           render={(props) => (
//             <>
//               {showAddTask && <AddTask onAdd={addTask} />}
//               {tasks.length > 0 ? (
//                 <Tasks
//                   tasks={tasks}
//                   onDelete={deleteTask}
//                   onToggle={toggleReminder}
//                 />
//               ) : (
//                 "No Tasks To Show"
//               )}
//             </>
//           )}
//         />
//         <Route path="/about" component={About} />
