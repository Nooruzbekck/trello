import React, { useState } from "react"; // Добавляем импорт React
import { Button } from "../UI/Button";

export const TaskForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddTask = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddTask();
          }}
        >
          <input type="text" placeholder="Введите задачу" required />
          <Button type="submit" onClick={() => setIsOpen(true)}>
            Добавить список
          </Button>
        </form>
      ) : (
        <Button type="button" onClick={() => setIsOpen(true)}>
          Добавить список
        </Button>
      )}
    </div>
  );
};
