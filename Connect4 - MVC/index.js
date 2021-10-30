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
    checkWin(row,line,color){
        console.log(`row:${row} line:${line} ${color}`);
        let answer=this.checkRow(row,line,color);
        if(typeof  answer === 'string')
        {
            return answer;
        }
        answer =this.checkLine(row,line,color);
        if(typeof  answer === 'string')
        {
            return answer;
        }
        answer =this.checkLeftSlant(row,line,color);
        if(typeof  answer === 'string')
        {
            return answer;
        }
        answer =this.checkRightSlant(row,line,color);
        if(typeof  answer === 'string')
        {
            return answer;
        }
        return false;
        
    }
    newGame(){
        this.#board=[[],[],[],[],[],[],[]];
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 7; j++) {
            this.#board[i][j]={fill: 'N',row:i,line:j};                      
            }
        }
        return this.#board;
    }
    checkRow(row,line,color){
        let count=0;
        for (let i = 0; i < 7; i++) {
            if(i!=0){
                if (`${this.#board[row][i-1].fill}`==color&&`${this.#board[row][i].fill}`==color) 
                {
                    count++;
                    if(count==3)
                        i=8;
                }
                else
                    count=0;
            }
        }
        if(count==3)
            return `${color} win`;
        else
            return false;
    }
    checkLine(row,line,color){
        let count=0;
        for (let i = 0; i < 7; i++) {
            if(i!=0){
                if (`${this.#board[i-1][line].fill}`==color&&`${this.#board[i][line].fill}`==color) 
                {
                    count++;
                    if(count==3)
                        i=8;
                }   
                else
                count=0;
            }
        }
        if(count==3)
            return `${color} win`;
        else
            return false;
    }
    checkLeftSlant(row,line,color){
        let leftR=row,leftL=line,count=0;
        while(leftR!=0&&leftL!=0)
        {
            leftR--;
            leftL--;
        }
        for (let i = 0; i < 7; i++) {
            if(i!=0&&leftR<7&&leftL<7){
                if (`${this.#board[leftR][leftL].fill}`==color/* &&`${this.#board[i][line].fill}`==color */) 
                {
                    count++;
                    if(count==4)
                        i=8;
                }   
                else
                    count=0;
                leftR++;
                leftL++;
            }
        }
        if(count==4)
            return `${color} win`;
        else
            return false;
    }
    checkRightSlant(row,line,color){
        let leftR=row,leftL=line,count=0;
        while(leftR<6&&leftL!=0)
        {
            leftR++;
            leftL--;
        }   
        console.log(leftR,leftL);
        for (let i = 0; i < 7; i++) {
            if(i!=0&&leftR>=0&&leftL<7){
                if (`${this.#board[leftR][leftL].fill}`==color/* &&`${this.#board[i][line].fill}`==color */) 
                {
                    count++;
                    if(count==4)
                    i=8;
                    console.log(count);
                    console.log(leftR,leftL);
                }   
                else
                    count=0;
                leftR--;
                leftL++;
            }
        }   
        if(count==4)
            return `${color} win`;
        return false;
    }

}
class view{
    constructor(){
        this.#turn='R';
        const root=document.getElementById('header');
        root.append(this.createElement('h1',[],['display-1','d-flex', 'justify-content-center'],{},'4 IN A ROW'))
        let grid=this.createElement('div',[],["container","board"]);
        grid.id='grid';
        root.append(grid);
        for (let i = 0; i < 7; i++) {
            let row=this.createElement('div',[],["row"]);
            row.id=`line ${6-i}`;
            for (let j = 0; j < 7; j++) {
                let column=this.createElement('div',[],['col'],{},``);
                column.id=j;
                if(i==0)
                    this.addColorChange(column);
                row.prepend(column);           
            }
            grid.append(row)
        }
        console.log(grid)
    }

}
class controller{
    constructor()

}


