import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './schema'
import db from './db'

const resolvers = { 
    Query: {
        companys() {
            return db.company
        },
        company(_: any, args: any, context: any) {
            return db.company.find((company)=> company.id === args.id)
        },
        agencys() {
            db.agency
        },
        agency(_: any, args: any, context: any) {
            return db.agency.find((agency)=> agency.id === args.id)
        },
        scores() {
            return db.score
        },
        score(_: any, args: any, context: any) {
            return db.score.find((review)=> review.id === args.id)
        }
    },
    Company: {
        score(parent: any) {
            return db.score.filter((r) => r.company_id === parent.id)
        }
    },
    Agency: {
        score(parent: any) {
            return db.score.filter((r) => r.agency_id === parent.id)
        }
    },
    Score: {
        agency(parent: any) {
            return db.agency.find((a) => a.id === parent.agency_id)
        },
        company(parent: any) {
            return db.company.find((c) => c.id === parent.company_id)
        }
    },
    Mutation: {
        deleteCompany(_: any, args) {
            db.company = db.company.filter((c) => c.id !== args.id)
            return db.company
        },
        addCompany(_: any, args) {
            let company = {
                ...args.company, 
                id: Math.floor(Math.random() * 10000).toString()
            }
            db.company.push(company)
    
            return company
        },
        updateCompany(_, args) {
            db.company = db.company.map((g) => {
            if (g.id === args.id) {
                return {...g, ...args.edits}
            }
    
            return g
            })
    
        return db.company.find((g) => g.id === args.id)
      }
    }
}


async function startServer() {

        // server setup
        const server = new ApolloServer({
        typeDefs, resolvers
        // resolvers (functions that determine how we respond to queries/ different data on the graph)
    })


    const { url } = await startStandaloneServer(server, {
        listen: {port: 4000}
    })
}

console.log('Server ready at port', 4000)

startServer().then(() => {
    console.log('Here is some data about agency', db.agency);
});

// Keep the process running indefinitely
setTimeout(() => {}, 1);