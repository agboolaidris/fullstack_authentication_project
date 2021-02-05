import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="div">
        <div class="card">
          <div className="img-container">
            <img
              src={`https://images.unsplash.com/photo-1612490020092-e4f7a3d17dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80`}
            />
          </div>
          <div className="content">
            <p class="title">Is Apple a Design Company?</p>
            <p>
              Apple is more than a tech company; it became a culture unto
              itself, a passion of most of people and the birthplace of the
              world’s most revolutionized products.{" "}
              <Link class="button" to="/">
                Read More
              </Link>
            </p>
            <div>
              <button>Delete</button>
              <button>Like</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
