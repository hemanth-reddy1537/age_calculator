function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const result = document.getElementById("result");

  if (!dobInput) {
    result.innerHTML = "<span style='color: red;'>Please select a valid date and time of birth.</span>";
    return;
  }

  const dob = new Date(dobInput);
  const now = new Date();

  if (dob > now) {
    result.innerHTML = "<span style='color: red;'>Date of birth cannot be in the future.</span>";
    return;
  }

  let diff = now - dob;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  let years = now.getFullYear() - dob.getFullYear();
  let months = now.getMonth() - dob.getMonth();
  let day = now.getDate() - dob.getDate();

  if (day < 0) {
    months--;
    day += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const remSeconds = seconds % 60;

  result.innerHTML = `
    🎉 You are <strong>${years} years</strong>, <strong>${months} months</strong>,
    <strong>${day} days</strong> old.<br>
    ⏱️ That’s approximately <strong>${seconds.toLocaleString()}</strong> seconds alive!
  `;
}
