describe("User can see the Header in App.jsx", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("is expected to have text in the header", () => {
    cy.get("h1").should("contain", "Employee Management");
  });
});
