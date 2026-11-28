import type { LucideIcon } from "lucide-react";

type Priority = "high" | "medium" | "low";

type Card =
{
    name : string;
    description? : string;

    priority? : Priority;
    assignee? : string;
    labels? : string;
    date? : string;
};

type Column =
{
    name : string;
    numOfTasks : number;
    cards : Card[];
    icon? : LucideIcon;
};

type Board =
{
    name : string;
    numOfTasks : number;
    numOfColumns : number;
    columns : Board[];
}

export {type Card , type Column , type Board}