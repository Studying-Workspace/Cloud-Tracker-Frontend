
export const formatDashboardData = (chartData:any[], granularity:string, startDate:string, endDate:string)=>{
	let service = new Set() ;
	let dates = new Set()  ;


	let serviceDateAndCost = new Map<string , number>() ;
	

	let chartDataWithinDate = []

	// console.log(endMonth);

	if(granularity === "d"){
		for (let i = 0; i < chartData?.length; i++) {
			let element = chartData[i];
			let currentDate = element.date.split("-");
			
			let year = currentDate[0];
			let month = currentDate[1];
			let day = currentDate[2];
			
			let dateToCheck = new Date(year, month - 1, day);
			let newstartDate = new Date(startDate);
			let newEndDate = new Date(endDate);
			// console.log(newstartDate);

			if (dateToCheck >= newstartDate && dateToCheck <= newEndDate) {
				chartDataWithinDate.push(chartData[i]);
			}
		}
	}
	
	// console.log(chartDataWithinDate.length);
	// console.log(chartDataWithinDate);
	chartDataWithinDate?.map((el:any)=>{
		service.add(el.service)
		dates.add(el.date)
		serviceDateAndCost.set(JSON.stringify({name:el.service , date:el.date}) , el.cost)
	});

	let seriesData:any = [] ;
	let datesArray = Array.from(dates) ;
	let servicesArray = Array.from(service) ;

	// 2024/07/11
	// if(year == Datayear and month == Datamonth and day >= Dataday)
	servicesArray?.forEach((service)=>{
		let data:any = [] ;
		datesArray.forEach((date)=>{
			const x = serviceDateAndCost.get(JSON.stringify({name:service , date:date}))
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


export const formatPieChart = (chartData:any[])=>{
	let service:Set<string> = new Set() ;
	let dates = new Set()  ;
	let totalCost = 0 ;
	let serviceCost:Map<string, number> = new Map <string , number> () ;


	chartData?.map((el:any)=>{
		service.add(el.service)
		dates.add(el.date)
		totalCost += el.cost
		let currentCost = serviceCost.get(el.service) ;
		currentCost = currentCost === undefined ? 0 : currentCost ;
		serviceCost.set(el.service , currentCost + el.cost)
	});

	let pieChartData:number[] = [] ;

	let servicesArray:string[] = Array.from(service) ;

	servicesArray?.forEach((el)=>{
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

export const defaultDates = (chartData:any[]|undefined)=>{
	let startDate = new Date()?.toLocaleDateString(), endDate = new Date()?.toLocaleDateString() ;
	if(chartData!==undefined && chartData?.length!==0){
		startDate = chartData?.[0].date ;
		endDate = chartData?.[chartData.length-1].date ;
	}

	return {startDate , endDate} ;
}
