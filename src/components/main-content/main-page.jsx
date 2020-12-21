import React, { useEffect } from "react";
import "./main-page.css";
import ReactTooltip from "react-tooltip";
import incomeIcone from "../assets/icons/income.png";
import expenseIcone from "../assets/icons/expense.png";
import transferIcon from "../assets/icons/transfer.png";
import loader from "../assets/loader5.gif";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const ITEM_HEIGHT = 48;

const MainPage = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openedElId, setOpenedElId] = React.useState(null);
  const opened = Boolean(anchorEl);

  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setOpenedElId(id);
  };

  const handleClose = (id) => {
    console.log(id);
    setOpenedElId(null)
    if(typeof id == "object"){
      
    setAnchorEl(null);
    }else{
      props.transactionDelete(id)
      setAnchorEl(null);
    }
    // props.transactionDelete(id)
    
  };
  const handleDel = (id) => () => {
    console.log(id);
    // transactionDelete
    setAnchorEl(null);
  };

  console.log(props.jurnal);
  const incomText = () => {
    return (
      <span className="incomText">
        <img src={incomeIcone} alt="" />
      </span>
    );
  };
  const expensesText = () => {
    return (
      <span className="expensesText">
        <img src={expenseIcone} alt="" />
      </span>
    );
  };
  const transferText = () => {
    return (
      <span className="transferText">
        <img src={transferIcon} alt="" />
      </span>
    );
  };

  const dateFormat = (itemDate) => {
    let date = new Date(itemDate);
    let newDate =
      date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

    return newDate;
  };
  const notFound = () => {
    return <h3>Ничего не найдено</h3>;
  };










  let typesIncome = props.jurnal.reduce((start, cure,i, arr)=>{
    let newObj = props.projects.map(item=>{
      
      let categ =  arr.reduce((st,en)=>{
        if(item.name===en.specific_project.name){
         return st +en.sum
        }
        return st
        },0)
        return{
          type:item.name,
          value:categ
        }
      
      
    
    })

    return [...newObj]
  },[])
  let typesExpense = props.jurnal.reduce((start, cure,i, arr)=>{
    let value = arr.reduce((prev,item)=>{
      
      if(item.type==="Expenses"){
        return prev +item.sum
      }
      return prev
      
    },0)

    
    
      return{
        type:"Расход",
        value
      }
   
  },{})
  let type = [typesIncome,typesExpense]
console.log(type)
  console.log(typesIncome)
  console.log(props.jurnal)













  return (
    <div className="content__wrapper">
      <div className="main-table">
        <table>
          <thead>
            <tr>
              <th>Дата</th>
              <th>Тип</th>
              <th>Сумма</th>
              <th>Счет</th>
              {/* <th>Счет #2</th> */}
              <th>Контрагент</th>
              <th>Категория</th>
              <th>Проект</th>
              <th>Доп.Инфо</th>
            </tr>
          </thead>
          <tbody>
            {props.jurnal.length == "" ? (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <div className="loader__wrapper">{notFound()}</div>
                </td>
                <td></td>
                <td></td>
              </tr>
            ) : (
              props.jurnal.map((item) => {
                return item.type === "BankTransaction" ? (
                  <tr key={item.id}>
                    <td>
                      <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={(e) =>handleClick(e, item.id)}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        open={openedElId == item.id}
                        onClose={handleClose}
                        PaperProps={{
                          style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: "20ch",
                          },
                        }}
                      >
                        <MenuItem onClick={() => handleClose(item.id)}>
                          Удалить 
                        </MenuItem>
                      </Menu>
                      {dateFormat(item.date)}
                    </td>
                    <td>
                      {item.type === "BankTransaction" ? transferText() : " "}
                    </td>
                    <td>{item.sum}</td>
                    <td className="transfer-table">
                      {item.bank_account && item.bank_account.name_bank}{" "}
                      <span className="transfer-icon">
                        <img
                          style={{ width: "11px" }}
                          src={transferIcon}
                          alt=""
                        />
                      </span>{" "}
                      {item.send_to && item.send_to.name_bank}{" "}
                    </td>
                    {/* <td>{item.send_to && item.send_to.name_bank}</td> */}
                    <td>
                      {(item.contractor && item.contractor.name) || "Не указан"}
                    </td>
                    <td>Без категорий</td>
                    <td>Нет проекта</td>
                    <td>
                      <span data-tip={item.description}>
                        {item.description || "Не заполнено"}{" "}
                      </span>
                      <ReactTooltip effect="solid" type="info" />{" "}
                    </td>
                  </tr>
                ) : item.type == "Income" ? (
                  <tr key={item.id}>
                    <td>
                      <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        id={item.id}
                        onClick={(e) =>handleClick(e, item.id)}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={openedElId == item.id}
                        onClose={handleClose}
                        PaperProps={{
                          style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: "20ch",
                          },
                        }}
                      >
                        <MenuItem
                          key={item.id}
                          onClick={() => handleClose(item.id)}
                        >
                          <span onClick={() => handleDel(item.id)}>
                            Удалить 
                          </span>
                        </MenuItem>
                      </Menu>
                      {dateFormat(item.date)}
                    </td>
                    <td>{incomText()}</td>
                    <td>{item.sum}</td>
                    <td>
                      {(item.bank_account && item.bank_account.name_bank) ||
                        "Счет удален в (архиве)"}
                    </td>
                    {/* <td>Не перевод</td> */}
                    <td>
                      {(item.contractor && item.contractor.name) || "Не указан"}
                    </td>
                    <td>
                      {(item.category_income && item.category_income.name) ||
                        "Не указан"}
                    </td>
                    <td>
                      {(item.specific_project && item.specific_project.name) ||
                        "Не указан"}
                    </td>
                    <td>
                      <span data-tip={item.description}>
                        {item.description || "Не заполнено"}{" "}
                      </span>
                      <ReactTooltip effect="solid" type="info" />{" "}
                    </td>
                  </tr>
                ) : (
                  <tr key={item.id}>
                    <td>
                      <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        id={item.id}
                        onClick={(e) =>handleClick(e, item.id)}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={openedElId == item.id}
                        onClose={handleClose}
                        PaperProps={{
                          style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: "20ch",
                          },
                        }}
                      >
                        <MenuItem onClick={()=>handleClose(item.id)}>Удалить </MenuItem>
                      </Menu>
                      {dateFormat(item.date)}
                    </td>
                    <td>{expensesText()}</td>
                    <td>{item.sum}</td>
                    <td>
                      {(item.bank_account && item.bank_account.name_bank) ||
                        "Счет удален в (архиве)"}
                    </td>
                    {/* <td>Не перевод</td> */}
                    <td>
                      {(item.contractor && item.contractor.name) || "Не указан"}
                    </td>
                    <td>
                      {(item.category_expenses &&
                        item.category_expenses.name) ||
                        "Не указан"}
                    </td>
                    <td>
                      {(item.specific_project && item.specific_project.name) ||
                        "Не указан"}
                    </td>
                    <td>
                      <span data-tip={item.description}>
                        {item.description || "Не заполнено"}{" "}
                      </span>
                      <ReactTooltip effect="solid" type="info" />{" "}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <div className="pagination__wrapper">
        <ul className="pagination">
          {/* <li><span >«</span></li> */}
          {props.paginationPages.map((item, id) => {
            return (
              <li key={item}>
                <span
                  className={props.curentPage == id ? "active" : ""}
                  onClick={() => props.paginationSelectPage(id)}
                >
                  {item}
                </span>
              </li>
            );
          })}
          {/* <li><span >»</span></li> */}
        </ul>
      </div>
    </div>
  );
};
export default MainPage;
