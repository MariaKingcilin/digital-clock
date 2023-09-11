function digital(){
	
	let date=new Date();
	
	let hour=date.getHours();
	let minute=date.getMinutes();
	let second=date.getSeconds();
	let session="AM";
	
	if(hour>=12){
		hour-=12;
		session="PM";
	}
	
	hour=(hour<10)?`0${hour}`:hour;
	minute=(minute<10)?`0${minute}`:minute;
	second=(second<10)?`0${second}`:second;
	
	document.querySelector(".hours").innerText=hour;
	document.querySelector(".minutes").innerText=minute;
	document.querySelector(".seconds").innerText=second;
	document.querySelector(".session").innerText=session;
	
	let dat=date.getDate();
	let monthNum=date.getMonth();
	let year=date.getFullYear();
	let dayNum=date.getDay();
	
	dat=(dat<10)?`0${dat}`:dat;
	
	let arrOne=["Jan","Feb","Mar","Apl","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	let arrTwo=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	
	let month=arrOne[monthNum];
	let day=arrTwo[dayNum];
	
	document.querySelector(".date").innerText=dat;
	document.querySelector(".month").innerText=month;
	document.querySelector(".year").innerText=year;
	document.querySelector(".day").innerText=day;
	
	setTimeout(digital,1000);
}

digital();