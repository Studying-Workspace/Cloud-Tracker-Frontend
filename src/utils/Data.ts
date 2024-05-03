import { number, string } from "yup";

export const chartData = [
	{
		 "date": "2024-03-17",
		 "service": "AWS CloudShell",
		 "cost": 5.0
	},
	{
		 "date": "2024-03-17",
		 "service": "Tax",
		 "cost": 2.0
	},
	{
		 "date": "2024-03-19",
		 "service": "AWS Cost Explorer",
		 "cost": 6.5
	},
	{
		 "date": "2024-03-22",
		 "service": "AWS Cost Explorer",
		 "cost": 8.02
	},
	{
		 "date": "2024-04-01",
		 "service": "Tax",
		 "cost": 10.01
	},
	{
		 "date": "2024-04-19",
		 "service": "AWS Cost Explorer",
		 "cost": 1.03
	},
	{
		 "date": "2024-04-22",
		 "service": "AWS Cost Explorer",
		 "cost": 0.02
	},
	{
		 "date": "2024-04-24",
		 "service": "AWS Cost Explorer",
		 "cost": 0.02
	},
	{
		 "date": "2024-04-26",
		 "service": "AWS Cost Explorer",
		 "cost": 6.01
	}
]


export const formatDate = ()=>{
	let service = new Set() ;
	let dates = new Set()  ;


	let series = new  Map<string , number>() ;


	chartData.map((el:any)=>{
		service.add(el.service)
		dates.add(el.date)
		series.set(JSON.stringify({name:el.service , date:el.date}) , el.cost)
	});

	let seriesData:any = [] ;
	let datesArray = Array.from(dates) ;
	let servicesArray = Array.from(service) ;

	// console.log(series.get({name:"AWS CloudShell" , date:"2024-03-17"}))

	servicesArray.forEach((service)=>{
		let data:any = [] ;
		datesArray.forEach((date)=>{
			// console.log(series.get({name:service , date:date}))
			const x =series.get(JSON.stringify({name:service , date:date}))
			data.push( x === undefined ? 0 : x) ;
		})
		let obj = {
			name : service,
			data : data
		}
		seriesData.push(obj) ;
	})

	return {datesArray , seriesData}  ;
}


export const formatPieChart = ()=>{
	let service:Set<string> = new Set() ;
	let dates = new Set()  ;
	let totalCost = 0 ;
	let serviceCost:Map<string, number> = new Map <string , number> () ;

	/*
		totalCost
		s1 => totalCostS1 / totalCost * 100
		s2
		s3
	*/

	chartData.map((el:any)=>{
		service.add(el.service)
		dates.add(el.date)
		totalCost += el.cost
		let currentCost = serviceCost.get(el.service) ;
		currentCost = currentCost === undefined ? 0 : currentCost ;
		serviceCost.set(el.service , currentCost + el.cost)
	});

	let pieChartData:number[] = [] ;

	let servicesArray:string[] = Array.from(service) ;

	servicesArray.forEach((el)=>{
		let cost:number|undefined = serviceCost.get(el) === undefined ? 0 : serviceCost.get(el)  ;
		let p:number = 0 ;

		if(cost!==undefined){
			p = (cost / totalCost) * 100 ;
		}
		p = parseFloat(p.toFixed(2)) ;

		pieChartData.push(p) ;
	})


	return {servicesArray , pieChartData} ;
}
