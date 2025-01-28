import { React, useState } from "react";
import { Card, Typography, Input, Button } from "antd";

export default function App() {
  const [inputValues, setInputValues] = useState("");
  const [savedTasks, setSavedTasks] = useState([]);
  const handleInputChange = () => {
    const trimmedValue = inputValues.trim();
    if (trimmedValue && !savedTasks.includes(trimmedValue)) {
      setSavedTasks((prev) => [...prev, trimmedValue]);
      setInputValues("");
    }
  };
  return (
    <div className="App">
      <>
        <Card style={{ margin: "10px" }}>
          <Input
            value={inputValues}
            style={{ margin: "10px" }}
            placeholder="Please Enter Name"
            onChange={(e) => {
              setInputValues(e.target.value);
            }}
          />
          <Button
            type="primary"
            onClick={handleInputChange}
            style={{ float: "right" }}
          >
            Enter
          </Button>
        </Card>
        {savedTasks.length > 0 && (
          <Card>
            <Typography>Added Names</Typography>
            {savedTasks.map((itm, index) => {
              return (
                <Typography
                  style={{
                    margin: "10px",
                    border: "1px solid",
                    borderRadius: "8px",
                    padding: "3px",
                  }}
                >
                  {itm}
                </Typography>
              );
            })}
          </Card>
        )}
      </>
    </div>
  );
}
