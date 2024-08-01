import { NextApiRequest, NextApiResponse } from "next";
import { Todo } from "@/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
      case "GET":
        return getTodos(req, res);
      default:
        res.status(405).end(); // Method Not Allowed
        break;
    }
  }

const todos: Todo[] = [
  {
    toDoId: "1",
    toDoTitle: "Go to gym",
    toDoCategory: "Health",
    toDoCompleted: true,
  },
  {
    toDoId: "2",
    toDoTitle: "Make dinner",
    toDoCategory: "Health",
    toDoCompleted: false,
  },
  {
    toDoId: "3",
    toDoTitle: "Study for exam",
    toDoCategory: "Education",
    toDoCompleted: false,
  },
  {
    toDoId: "4",
    toDoTitle: "go for a walk",
    toDoCategory: "health",
    toDoCompleted: false,
  },
];

async function getTodos(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).send(todos);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}