document.getElementById('assessmentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const responses = Array.from(this.querySelectorAll('input[type="radio"]:checked'));
  const totalScore = responses.reduce((sum, radio) => sum + parseInt(radio.value), 0);
  const averageScore = totalScore / responses.length;

  let moodResultText = '';
  let meditationSuggestion = '';

  if (averageScore <= 2) {
      moodResultText = "You might be feeling quite low. It's important to seek support.";
      meditationSuggestion = "Consider trying guided meditations focused on healing and self-compassion.";
  } else if (averageScore <= 3.5) {
      moodResultText = "You're experiencing some challenges. Self-care is crucial.";
      meditationSuggestion = "Try mindfulness meditation to enhance your awareness and reduce stress.";
  } else {
      moodResultText = "You're generally feeling well! Keep up the positive mindset.";
      meditationSuggestion = "Explore loving-kindness meditation to deepen your positive emotions.";
  }

  document.getElementById('moodResultText').textContent = moodResultText;
  document.getElementById('meditationSuggestion').textContent = meditationSuggestion;
  document.getElementById('assessmentResult').style.display = 'block';
});


///
document.getElementById('mindfulnessLink').addEventListener('click', function(e) {
  e.preventDefault();
  toggleCard('mindfulnessCard');
});

document.getElementById('lovingKindnessLink').addEventListener('click', function(e) {
  e.preventDefault();
  toggleCard('lovingKindnessCard');
});

document.getElementById('bodyScanLink').addEventListener('click', function(e) {
  e.preventDefault();
  toggleCard('bodyScanCard');
});

document.getElementById('breathAwarenessLink').addEventListener('click', function(e) {
  e.preventDefault();
  toggleCard('breathAwarenessCard');
});

function toggleCard(id) {
  const card = document.getElementById(id);
  card.style.display = (card.style.display === 'none' || card.style.display === '') ? 'block' : 'none';
}
