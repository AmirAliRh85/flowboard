import {http , HttpResponse} from "msw/http";

export const handlers = [
    http.get("/api/projects" , (resolver) => 
    {
        return HttpResponse.json([
            {
                name : "",
                numOfTasks : 4,
                numOfColumns : 3,
                columns : [{
                    name : "Todo",
                    numOfTasks : 3,
                    cards : [{name : "something1"} , {name : "something2"} , {name : "something3"}],
                },
                {
                    name : "In Progress",
                    numOfTasks : 1,
                    cards : [{name : "something4"}],
                },
                {
                    name : "Done",
                    numOfTasks : 0,
                    cards : [],
                }],
            }
        ]);
    }),
];

/*
    name : string;
    numOfTasks : number;
    numOfColumns : number;
    boards : Board[];

    name : string;
    numOfTasks : number;
    cards : Card[];
    icon? : LucideIcon;

    name : string;
    description? : string;
    priority? : Priority;
    assignee? : string;
    labels? : string;
    date? : string;
*/