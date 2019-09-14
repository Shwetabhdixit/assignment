import React from 'react';
import logo from './logo.svg';
import './App.css';
//import {Button,Container,Table,Col,Card} from 'react-bootstrap' ;
import { Container, Row, Col } from 'reactstrap';


const styles =
{
  vert  : {
    height: window.innerHeight,
    overflowY:'100%'
  },
  wit: {
    width : '40%'
  }
}
class App extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.state = {
      leftGrid : Array(4).fill(0).map(row => new Array(3).fill(true)),
      rightGrid :  Array(4).fill(0).map(row => new Array(3).fill(false))
    }
  }

  assignPersonnel()
  {
      let leftArr = this.state.leftGrid;
      let rightArr = this.state.rightGrid;
      let flag = false;
      let i=0;
      let j=0;
      while(i<leftArr.length && flag === false)
      {
        j=0;
        while(j<leftArr[i].length && flag ===false )
        {
          if(leftArr[i][j]===true)
          {
            flag=true;
            leftArr[i][j]=false;
            rightArr[i][j]=true;
          }
          j++;
        }
        i++;
      }
      if(!flag)
      {
        alert('No more personnel left to assign');
      }
      else
      {
        this.setState(
          {leftGrid:leftArr,rightGrid:rightArr}
        )
      }


  }

  revokePersonnel()
  {
    let leftArr = this.state.leftGrid;
      let rightArr = this.state.rightGrid;
      let flag = false;
      let i=0;
      let j=0;
      while(i<rightArr.length && flag === false)
      {
        j=0;
        while(j<rightArr[i].length && flag ===false )
        {
          if(rightArr[i][j]===true)
          {
            flag=true;
            leftArr[i][j]=true;
            rightArr[i][j]=false;
          }
          j++;
        }
        i++;
      }
      if(!flag)
      {
        alert('No personnel has been assigned');
      }
      else
      {
        this.setState(
          {leftGrid:leftArr,rightGrid:rightArr}
        )
      }


  }

  render()
  {
    console.log(this.state.leftGrid);
    console.log(this.state.rightGrid);
  return (
    <div>
      <div className = "header">
        <h1><i className = "fa fa-truck text-primary"></i>   Delivery Personnel<span className ="text-primary">Manager</span> </h1>
      </div>
          <table id="left">
            <tbody>
              {this.state.leftGrid.map(function(rows)
              {
                  return(
                    <tr rowspan = "2" >

                      {rows.map(function(columns)
                      {
                        if(columns)
                        {
                          return <td><i class="fa fa-user-circle-o" aria-hidden="true"></i></td>;
                        }
                        else
                        {
                          return <td><i className="fa fa-times" aria-hidden="true"></i></td>;
                        }
                      })}
                    </tr>
                  )
              })}

            </tbody>
          </table>
            <button className = "btn btn-primary" id="assign"
            onClick={()=>this.assignPersonnel()}>
              Assign
            </button>
         
            <button className = "btn btn-primary" id="revoke"
            onClick={()=>this.revokePersonnel()}>
              Revoke
            </button>
        
        
          <table id="right">
            <tbody>
            {this.state.rightGrid.map(function(rows)
              {
                  return(
                    <tr>
                      {rows.map(function(columns)
                      {
                        if(columns)
                        {
                          return <td>
                          <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                          </td>;
                        }
                        else
                        {
                          return <td><i className="fa fa-times" aria-hidden="true"></i></td>;
                        }
                      })}
                    </tr>
                  )
              })}
            </tbody>
          </table>
    </div>
  );
}
}

export default App;
