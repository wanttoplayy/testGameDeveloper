//ข้อ 1.จากโจทย์ต้องการ Int ที่มีความถี่มากที่สุดและต้องการว่าเป็น Int ตัวไหน

function mostCountInt(arr) {
  // สร้าง Object เพื่อ store ค่าเป็น value pair ระหว่าง Count กับ Int
  let intCount = {};

  for (let int of arr) {
    if (!intCount[int]) {
      intCount[int] = 1;
    } else {
      intCount[int]++;
    }
  }
  //log แล้วจะเห็น key เป็นจำนวนครั้ง value เป็น Int
  console.log(intCount);
  // สร้าง Variable เริ่มต้นที่ 0 เพื่อใช้ Compare value
  let mostFrequentInt = 0;
  let mostFrequentCount = 0;
  // นำ ket และ value มาแทนใน variable int , count และใช้ object.entries เพื่อแปลง key value pairs เป็น array
  for (let [int, count] of Object.entries(intCount)) {
    console.log([int, count]);
    if (count > mostFrequentCount) {
      mostFrequentInt = int;
      mostFrequentCount = count;
    }
  }

  // Return the most frequent integer and its count
  return {
    mostFrequentInt,
    mostFrequentCount,
  };
}

const arr = [6, -1, 6, 3, 3, 6, 5, 6, 6, 7];

console.log(mostCountInt(arr));

//ข้อ 2 logic คณิตศาสตร์

// ผมคิดว่าเริ่มจาก ทีมแรก คือ หนุ่ม A ไปกับสาว ฺB เพราะเป็นสองคนที่เร็วที่สุดจะใช้เวลาข้ามฝั่งร่วมกัน 2 นาที(เพราะยังไง A ก็ต้องรอ B ถึงฝั่งก่อน) Accumulate :2
// ต่อมา ให้ 1 เดินกลับมาเพื่อรับลุง C ไปอีกฝั่งโดยกลับมาใช้เวลา 1 นาที และเดินคู่ลุง C ใช้เวลาอีก 5 นาที รวมเป็น 6                     Accumulate :2+6 = 8
// ทำต่ออย่างเดิมอีกรอบให้หนุ่ม A เดินทางกลับมารับปู่ D ใช้เวลา 1 นาทีเดินกลับมา และ 8 นาทีเดินไปรวมเป็น 9                          Accumulate :8+9 = 17
// Total 17 Minute

//ข้อ 3 Logic

function primeAt(index) {
  // ตั้งค่าเริ่มต้นที่ 2 เพราะเป็นจำนวนเฉพาะตัวแรกโดยให้เป็น index ที่ 1 เพราะถ้าเริ่มที่ 0 ตัวเลขจะเหลื่อมกัน 1 index
  let currentIndex = 1;
  let currentNum = 2;

  while (currentIndex !== index) {
    currentNum++;

    // เชคเลข index ที่  ว่าเป็นจำนวนเฉพาะไหม ถ้้าModulo แล้ว === 0 ให้เพิ่ม index ทำอย่างงี้ไปเรื่อยๆ จนหารไม่ลงตัว
    let isPrime = true;
    for (let i = 2; i < currentNum; i++) {
      console.log(i);
      if (currentNum % i === 0) {
        isPrime = false;
        break;
      }
      console.log(currentNum);
      console.log(isPrime);
    }

    //เมื่อหารลงตัวแล้วให้ เพิ่ม Current index ให้เท่ากับค่า index เพื่อหยุด While loop
    if (isPrime) {
      console.log(currentIndex);
      currentIndex++;
      console.log(currentIndex);
    }
  }

  // return ค่า จำนวนเฉพาะ
  return currentNum;
}

// console.log(primeAt(100))//541;

//เครื่องผมรันไม่ไหวจริงๆ ครับเท่าที่ไปอ่านมา มัน Iterate over กันเกิน 2000 พันครั้งมันจะเอ๋อๆ แล้วครับก็เกินตั้งแต่ 100 แล้วเพราะว่า ตาม Big O Notationแล้วันมันเป็น Nested Loop มันเป็น O กำลัง N ซึ่ง 100*100 ก็หมื่นละครับ
// console.log(primeAt(50000));
// console.log(primeAt(1000000));
// console.log(primeAt(2000000));

//ข้อ 4

//จาก Condition เป็นไปไม่ได้ที่จะเป็นยาพิษจะอยู่ที่ Position 2 และ 6 เพราะจาก ข้อ 4 pos 6 ไม่ใช่ยาพิษเพราะฉะนั้น pos 6 และ pos2 ต้องเป็น nettle เพราะเป็น twin
//และยาพิษต้องอยู่ทางด้านซ้ายเสมอจึงทำให้กลายเป็นดังนี้ 1.Poison 2.Nettle 3.!Poison 4.Poison 5.Poison 6.Nettle 7.!Poison ปล. ไม่ใช้ Poison เนื่องจาก 3 และ 7 ไม่ใช่จากสมการของผม
// different are those who stand at either end, But if you would move onwards neither is your friend;
//ผมตีความว่า ทั้ง 2 และ 6 ไม่ใช่เพื่อนนั้นหมายความว่าต้องเป็น 7 เพราะ 7 เป็นทางเลือกเดียวที่จะเป็น move ahead     เพราะ  1  Poison ไปแล้ว 3 จึงเป็น trasnport back to home
//ได้ Position ดังนี้ 1.Poison 2.Nettle 3.Transport back to home 4.Poison 5.Poison 6.Nettle 7.Move Ahead
