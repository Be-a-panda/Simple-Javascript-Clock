setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;    
}, 1000);

/* 1 day= 12hours                        
12hr=360 deg
1hr=360/12
1 hrs=30 deg
now- 1hr=60min
therefore... 60min=30 deg
1min=60/30=1/2

Therefore..hrotation=30*htime+mtime/2
*/

/* 1hr=60min
60min=360
min=360/60  =6
Therefore..... mrotation=6*mtime
*/

/* 1min=60sec
60sec=360
sec=360/60  =6
Therefore.... srotation=6*stime
*/