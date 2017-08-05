import React, {Component} from 'react'

 class Article extends Component {
     constructor(props){
        super(props)
            this.state = {
                isOpen: false
            }
     }
     render() {
         const {article} = this.props  //теперь в этом методе доступны данные которые мы закинули
         return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {this.toggleOpen}>open</button>
                {this.getBody()}
            </div>
        )
    }
    getBody(){
        if (!this.state.isOpen) return null
        const {article} = this.props //в этом тоже
        return <div>{article.text}</div>
    }
    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen //противоположное isOpen
        })
    }
 }

export default Article;

//прочитать, установить данные из состояния
//отрисовать данные
