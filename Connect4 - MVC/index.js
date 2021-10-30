const root = document.getElementById("root");

class model{
    constructor(){
        this.#board=[[],[],[],[],[],[],[]];
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 7; j++) {
            this.#board[i][j]={fill:'N',row:i,line:j};                      
            }
        }
        console.log(this.#board);
    }
    addKey(color,row){
        let line;
        for (let i = 0; i < 7; i++) {
            if(this.#board[row][i].fill=='N')
            {
                this.#board[row][i].fill=color; 
                line=i;
                i=8;           
            }
        }
        let answer=this.checkWin(row,line,color);
        if(answer!=false)
            return  answer
        return this.#board; 
    }

}
class view{
    constructor()

}
class controller{
    constructor()

}


