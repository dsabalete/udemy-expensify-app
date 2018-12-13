import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import Modal from 'react-modal';

export class EditExpensePage extends React.Component {
    state = {
        modalIsOpen: false
    };
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.setState({ modalIsOpen: true });
    };
    handleCloseModal = () => {
        this.setState({ modalIsOpen: false });
    };
    handleRemove = () => {
        this.handleCloseModal();
        // this.props.startRemoveExpense({ id: this.props.expense.id });
        // this.props.history.push('/');
    };
    handleCancelRemove = () => {
        this.handleCloseModal();
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button
                        className="button button--secondary"
                        onClick={this.onRemove}>Remove Expense</button>
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.handleCloseModal}
                    ariaHideApp={false}
                >
                    <button onClick={this.handleCloseModal}>Close</button>
                    <div>
                        <p>Are you sure you want to remove it?</p>
                        <button onClick={this.handleRemove}>Yes</button>
                        <button onClick={this.handleCancelRemove}>No</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);