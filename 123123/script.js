// 일정 저장
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('schedule-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const type = form.type.value;
        const date = form.date.value;
        const time = form.time.value;
        const memo = form.memo.value;
  
        const schedule = { type, date, time, memo };
        let schedules = JSON.parse(localStorage.getItem('schedules')) || [];
        schedules.push(schedule);
        localStorage.setItem('schedules', JSON.stringify(schedules));
        alert('일정이 저장되었습니다!');
        form.reset();
      });
    }
  
    // 일정 목록 표시
    const list = document.getElementById('schedule-list');
    if (list) {
      const schedules = JSON.parse(localStorage.getItem('schedules')) || [];
      schedules.forEach((s, idx) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <div>
            <strong>${s.type}</strong> | ${s.date} ${s.time} <br>${s.memo}
          </div>
          <div>
            <button onclick="deleteSchedule(${idx})">삭제</button>
          </div>
        `;
        list.appendChild(li);
      });
    }
  });
  
  // 삭제 기능
  function deleteSchedule(idx) {
    let schedules = JSON.parse(localStorage.getItem('schedules')) || [];
    schedules.splice(idx, 1);
    localStorage.setItem('schedules', JSON.stringify(schedules));
    location.reload();
  }
  