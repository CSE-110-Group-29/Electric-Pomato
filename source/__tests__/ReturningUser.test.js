import ReturningUser from '../js/ReturningUser.js';

// Initialize the DOM with a ReturningUser element.
beforeEach(() => {
  document.body.innerHTML = ` 
  <div class="d-flex justify-content-between align-items-center pt-5">
    <div class="text-white">
      <h1 class="mb-0">Electric Pomato</h1>
        <h4 class="mb-0">Plan. Track. Record.</h4>
    </div>
    <returning-user></returning-user>
  </div>`;
});

test('Blank Test', () => {
  const returningUser = new ReturningUser();
  expect(returningUser).not.toBeNull();
});
