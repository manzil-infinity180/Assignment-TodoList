const chai = require("chai");
const chaiHttp = require('chai-http');
const server = require("../server");
const expect = chai.expect;
const should = chai.should();
chai.use(chaiHttp);

describe('Test',()=>{
    
       it('/api/v1/all-task',(done)=>{
        chai.request(server)
            .get('/api/v1/all-task')
            .end((err,res)=>{
               
                res.should.have.status(200);
                res.body.should.be.a('object');
                expect(res.status).to.equal(200);
                done();
            })
       });
       it('All Task Categories as Completed',(done)=>{
        chai.request(server)
            .get('/api/v1/all-task?categories=completed')
            .end((err,res)=>{
                // console.log(res.body);
                res.should.have.status(200);
                res.body.should.be.a('object');
                // chai.expect(res.status).to.equal(200);
                done();
            })
       });
       it('All Task Categories as Not Completed',(done)=>{
        chai.request(server)
            .get('/api/v1/all-task?categories=not-completed')
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
       });
       describe('Post',()=>{
        it("Create a Task",(done)=>{
            const body ={
                title:"Creating test using chai and mocha",
                description:"Hello from testing"
            };
            chai.request(server).post('/api/v1/create-task').send(body).end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('object');
            })
          done();
        })
       });

       describe('Update',()=>{
        it("Update a Task",(done)=>{
            const id = '65b801aaa5a0c4afcd2e4ed4'
            const body ={
                title:"New Creating test using chai and mocha",
            };
            chai.request(server).patch('/api/v1/update-task'+id).send(body).end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('object');
            })
          done();
        })
       });



   
})