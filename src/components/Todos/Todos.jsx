import React,{Component} from 'react';
import ListView from '../ListView/ListView';
import TableView from '../TableView/TableView';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import Controllers from '../Controllers/Controllers';
import CreateTodoForm from '../CreateTodoForm/CreateTodoForm';
import shortid from 'shortid';

class Todos extends Component{

    state ={
        todos:[{
            id:'dkfjdkfjkd3',
            text:'To do menu',
            time:new Date(),
            description:'Something description',
            isSelect:false,
            isComplete:false
        },
        {
            id:'dkfjdkfjkd4',
            text:'another todo',
            time:new Date(),
            description:'Something description',
            isSelect:false,
            isComplete:false
        },
    ],
    isOpenTodoForm: false,
    searchTerm :'',
    view:'list',
    filter:'all'
    };

    toggleSelect = todoId => {
        const todos = [...this.state.todos];
        const todo = todos.find(t => t.id === todoId);
        todo.isSelect = !todo.isSelect
        this.setState({todos})
    }
    toggleComplete = todoId => {
        const todos = [...this.state.todos];
        const todo = todos.find(t => t.id === todoId);
        todo.isComplete = !todo.isComplete;
        this.setState({todos})
    }
    searchHandler = searchValue =>{
        this.setState({searchTerm : searchValue})
    }
    toggleForm =()=>{
        this.setState({
            isOpenTodoForm:!this.state.isOpenTodoForm
        })
    }
    createTodo = todo => {
        todo.id = shortid.generate();
        todo.time = new Date();
        todo.isComplete = false;
        todo.isSelect = false;

        const todos = [...this.state.todos, todo];
        this.setState({todos});
        this.toggleForm();
    }

    filterHandler = filter => {
        this.setState({filter})
    }
    changeView = event => {
        this.setState({
            view:event.target.value
        })
    }
    clearSelected = () => {
        const todos = this.state.todos.filter(todo => !todo.isSelect)
        this.setState({todos})
    }
    clearCompleted = () => {
        const todos = this.state.todos.filter(todo => !todo.isComplete)
        this.setState({todos})
    }
    reset = () => {
        this.setState({
            isOpenTodoForm: false,
            searchTerm :'',
            view:'list',
            filter:'all'
        })
    }
    performSearch = () =>{
        return this.state.todos.filter(todo => todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }
    performFilter = todos => {
        const {filter} = this.state;
        if(filter==='completed'){
            return todos.filter(todo => todo.isComplete)
        }
        else if(filter ==='running'){
            return todos.filter(todo => !todo.isComplete)
        }
        else{
            return todos
        }
    }
    getView = () => {
        let todos = this.performSearch()
        todos = this.performFilter(todos)
        return this.state.view === 'list' ? (
            <ListView 
                    todos={todos}
                    toggleSelect={this.toggleSelect}
                    toggleComplete={this.toggleComplete}
                    />
        ) :(
            <TableView
            todos={todos}
            toggleSelect={this.toggleSelect}
            toggleComplete={this.toggleComplete}
          />
        )
    }

    render(){
        return (
            <div>
                <h2 className="display-4 text-center my-4">EveryDay Todo</h2>
                <Controllers
                term={this.state.searchTerm}
                view={this.state.view}
                filter={this.state.filter}
                searchHandler={this.searchHandler}
                toggleForm={this.toggleForm}
                changeView={this.changeView}
                filterHandler={this.filterHandler}
                clearCompleted={this.clearCompleted}
                clearSelected={this.clearSelected}
                reset={this.reset}
                />
                <div>
                    {this.getView()}
                </div>
                <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
                    <ModalHeader toggle={this.toggleForm}>
                        Create new Todo item
                    </ModalHeader>
                    <ModalBody>
                        <CreateTodoForm
                        createTodo ={this.createTodo}
                        />
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Todos;