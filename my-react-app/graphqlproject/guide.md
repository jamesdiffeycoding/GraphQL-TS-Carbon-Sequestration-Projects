query examples

query GameQuery {
  company {
    title
    disclosure
  }
}
------------------------------------------------------------------------


mutation EditMutation ($edits: EditCompanyInput!, $id: ID!) {
  updateCompany (edits: $edits, id: $id) {
    title, disclosure
  }
}
------------------------------------------------------------------------
mutation AddMutation ($company: addCompanyInput!) {
  addCompany(company: $company) {
    id,
    title,
    disclosure
  }
}
{
  "company": {
    "title": "a new company",
    "disclosure": ["switch", "ps5"]
  }
}
------------------------------------------------------------------------


mutation DeleteMutation($id: ID!) {
  deleteCompany(id: $id) {
    id, title, disclosure
  }
}

{
  "id": "2"
}

------------------------------------------------------------------------
query ExampleQuery($id: ID!) {
  review(id: $id){
    rating,
    company {
      title, 
      disclosure,
      score {
        rating
      }

    }
  }
}
{
  "id": "2",
  "agency": null,
}