const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// for (const member of teamMembers) {
//   console.log(member.img);
// }
let containerCard = document.querySelector('.container-card');

const teamMembersCard = (member) => {
  const { name, role, email, img } = member
  return `<div class="card">
    <img src="assets/${img}" alt='#' class="image">
    <div class="card-content">
      <h4>${name}</h4>
      <p>${role}</p>
      <p>${email}</p>
    </div>
  </div>`
}
console.log(teamMembersCard(teamMembers));


function memberCards(membersArray) {
  let cards = '';
  for (let member of membersArray) {
    cards += teamMembersCard(member)
  }
  return containerCard.innerHTML = cards

}
memberCards(teamMembers)



// FORM

const form = document.querySelector('.form')

const button = document.querySelector('.btn')

button.addEventListener('click', (e) => {
  e.preventDefault();
  const imageForm = document.getElementById('image-form').value
  const nameForm = document.getElementById('name-form').value
  const roleForm = document.getElementById('role-form').value
  const emailForm = document.getElementById('email-form').value
  document.getElementById('image-form').value = '';
  document.getElementById('name-form').value = '';
  document.getElementById('role-form').value = '';
  document.getElementById('email-form').value = '';

  const newMember = {
    img: imageForm,
    name: nameForm,
    role: roleForm,
    email: emailForm
  };
  teamMembers.push(newMember)
  memberCards(teamMembers)
})

