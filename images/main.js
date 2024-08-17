document.getElementById('daily').addEventListener('click', runFunctionOne);
document.getElementById('weekly').addEventListener('click', runFunctionTwo);
document.getElementById('monthly').addEventListener('click', runFunctionThree);

function runFunctionOne(e){
    document.getElementById('daily').classList.add('active');
    document.getElementById('weekly').classList.remove('active');
    document.getElementById('monthly').classList.remove('active');
    document.getElementById('daily-work').classList.remove('hide');
    document.getElementById('daily-play').classList.remove('hide');
    document.getElementById('daily-study').classList.remove('hide');
    document.getElementById('daily-exercise').classList.remove('hide');
    document.getElementById('daily-social').classList.remove('hide');
    document.getElementById('daily-care').classList.remove('hide');
    document.getElementById('weekly-work').classList.add('hide');
    document.getElementById('weekly-play').classList.add('hide');
    document.getElementById('weekly-study').classList.add('hide');
    document.getElementById('weekly-exercise').classList.add('hide');
    document.getElementById('weekly-social').classList.add('hide');
    document.getElementById('weekly-care').classList.add('hide');
    document.getElementById('monthly-work').classList.add('hide');
    document.getElementById('monthly-play').classList.add('hide');
    document.getElementById('monthly-study').classList.add('hide');
    document.getElementById('monthly-exercise').classList.add('hide');
    document.getElementById('monthly-social').classList.add('hide');
    document.getElementById('monthly-care').classList.add('hide');
};

function runFunctionTwo(e){
    document.getElementById('daily').classList.remove('active');
    document.getElementById('weekly').classList.add('active');
    document.getElementById('monthly').classList.remove('active');
    document.getElementById('daily-work').classList.add('hide');
    document.getElementById('daily-play').classList.add('hide');
    document.getElementById('daily-study').classList.add('hide');
    document.getElementById('daily-exercise').classList.add('hide');
    document.getElementById('daily-social').classList.add('hide');
    document.getElementById('daily-care').classList.add('hide');
    document.getElementById('weekly-work').classList.remove('hide');
    document.getElementById('weekly-play').classList.remove('hide');
    document.getElementById('weekly-study').classList.remove('hide');
    document.getElementById('weekly-exercise').classList.remove('hide');
    document.getElementById('weekly-social').classList.remove('hide');
    document.getElementById('weekly-care').classList.remove('hide');
    document.getElementById('monthly-work').classList.add('hide');
    document.getElementById('monthly-play').classList.add('hide');
    document.getElementById('monthly-study').classList.add('hide');
    document.getElementById('monthly-exercise').classList.add('hide');
    document.getElementById('monthly-social').classList.add('hide');
    document.getElementById('monthly-care').classList.add('hide');
};

function runFunctionThree(e){
    document.getElementById('daily').classList.remove('active');
    document.getElementById('weekly').classList.remove('active');
    document.getElementById('monthly').classList.add('active');
    document.getElementById('daily-work').classList.add('hide');
    document.getElementById('daily-play').classList.add('hide');
    document.getElementById('daily-study').classList.add('hide');
    document.getElementById('daily-exercise').classList.add('hide');
    document.getElementById('daily-social').classList.add('hide');
    document.getElementById('daily-care').classList.add('hide');
    document.getElementById('weekly-work').classList.add('hide');
    document.getElementById('weekly-play').classList.add('hide');
    document.getElementById('weekly-study').classList.add('hide');
    document.getElementById('weekly-exercise').classList.add('hide');
    document.getElementById('weekly-social').classList.add('hide');
    document.getElementById('weekly-care').classList.add('hide');
    document.getElementById('monthly-work').classList.remove('hide');
    document.getElementById('monthly-play').classList.remove('hide');
    document.getElementById('monthly-study').classList.remove('hide');
    document.getElementById('monthly-exercise').classList.remove('hide');
    document.getElementById('monthly-social').classList.remove('hide');
    document.getElementById('monthly-care').classList.remove('hide');
}