function calculateFinalScore() {
    var rawScore1 = parseFloat(document.getElementById("rawScore1").value);
    var harmonyScore1 = parseFloat(document.getElementById("harmonyScore1").value);
    
    var finalScore1 = rawScore1/2 + 2*rawScore1/2*harmonyScore1/(rawScore1/2 + harmonyScore1);
    finalScore1 = (rawScore1 === 0||harmonyScore1 ===0) ? 0 : finalScore1;
  
    var rawScore2 = parseFloat(document.getElementById("rawScore2").value);
    var harmonyScore2 = parseFloat(document.getElementById("harmonyScore2").value);
    
    var finalScore2 = rawScore2/2 + 2*rawScore2/2*harmonyScore2/(rawScore2/2 + harmonyScore2);
    finalScore2 = (rawScore2 === 0||harmonyScore2 ===0) ? 0 : finalScore2;

    document.getElementById("Ket qua so 1").textContent = "Điểm BTL số 1:" + finalScore1.toFixed(2);
    document.getElementById("Ket qua so 2").textContent = "Điểm BTL số 2:" + finalScore2.toFixed(2);

    var finalScore = (finalScore1 + finalScore2) /2;
    document.getElementById("finalScoreResult").textContent = "Điểm cuối cùng: " + finalScore.toFixed(2);
  }