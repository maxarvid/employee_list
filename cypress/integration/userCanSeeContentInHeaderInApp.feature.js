describe("User can see the Header in App.jsx", () => {
  beforeEach(() => {
    cy.intercept("GET", "*/users**", { fixture: "users.json" });
    cy.visit("/");
  });

  it("is expected to have text in the header", () => {
    cy.get("h1").should("contain", "Employee Management");
  });

  describe("emplpyee list section", () => {
    it("is expected to display 4 employees", () => {
      cy.get("[data-testid=employee-list]").children().should("have.length", 4);
    });

    it("is expected to return Thomas as first employee in list", () => {
      cy.get("[data-testid=employee-list]")
        .children()
        .first()
        .should("contain.text", "Thomas Bluth");
    });
  });
});
