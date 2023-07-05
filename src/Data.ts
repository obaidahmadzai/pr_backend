``
export enum ReportType  {
    INCOME = "income",
    EXPENSE = "expense"
}
export let data : Data  = {
    report: [
        {
            id : "uuid1",
              source: "abc",
              amount: 12000,
              created_at: new Date(),
              updated_at: new Date(),
              type: ReportType.INCOME,
        
        },
        {
            id : "uuid2",
              source: "abcd",
              amount: 40000,
              created_at: new Date(),
              updated_at: new Date(),
              type: ReportType.EXPENSE,
        
        },
        {
            id : "uuid3",
              source: "abcde",
              amount: 3000,
              created_at: new Date(),
              updated_at: new Date(),
              type: ReportType.INCOME,
        
        },
        {
            id : "uuid4",
              source: "abcdef",
              amount: 13000,
              created_at: new Date(),
              updated_at: new Date(),
              type: ReportType.EXPENSE,
        
        }
    ]
}


interface Data {
    report: {
      id: string;
      source: string;
      amount: number;
      created_at: Date;
      updated_at: Date;
      type: ReportType;
    }[]
}

