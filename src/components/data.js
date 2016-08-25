var data = [ 
    {userTask: "Move stuff around the house",
     timeToComplete: 1471924800000, 
     timeEntered: 1471888608457},// should read ten hours    
    
    {userTask: "Move some other stuff around the house",
     timeToComplete: 1472097600000, 
     timeEntered: 1471924800000}, // should read two? days
    
    {userTask: "Time travel.",
     timeToComplete: 1472443200000, 
     timeEntered: 1471924800001},//should read six days
    
    {userTask: "Watch the world burn",
     timeToComplete: 1471899600000,
     timeEntered: 1471898964503}
] 

export default data