import './app-info.css';

const AppInfo = ({amountUsers, premiumUsers}) => {
    return (<div className="app-info">
            <h1>Учет сотрудников в компании </h1>
            <h2>Число сотрудников: {amountUsers}</h2>
            <h2>Премию получат: {premiumUsers}</h2>
        </div>);
}

export default AppInfo;