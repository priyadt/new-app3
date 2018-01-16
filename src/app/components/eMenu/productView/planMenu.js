import React, { Component } from 'react';

class PlanMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      package1Name: 'Platinum',
      package2Name: 'Gold',
      package3Name: 'Silver',
      package4Name: 'Basic'
    };
    this.renderPlan = this.renderPlan.bind(this);
  }

  getPackage1Name = (event) => {
    this.props.setPackageNames("package1", event.target.value);
  }

  getPackage2Name = (event) => {
    this.props.setPackageNames("package2", event.target.value);
  }

  getPackage3Name = (event) => {
    this.props.setPackageNames("package3", event.target.value);
  }

  getPackage4Name = (event) => {
    this.props.setPackageNames("package4", event.target.value);
  }

  componentWillMount() {
    //if (!this.props.hasUserPrefSavedData && this.props.packageNameDefaults && this.props.packageNameDefaults.length > 0 ) {
    if (this.props.packageNameDefaults && this.props.packageNameDefaults.length > 0 ) {
          for (let i = 0; i < this.props.packageNameDefaults.length; i++) {
            let pkgItem = this.props.packageNameDefaults[i];
            switch (pkgItem.display_index) {
              case 1:
                this.props.packagesNames.package1 =  pkgItem.package_name;
                break;
              case 2:
                this.props.packagesNames.package2 =  pkgItem.package_name;
                break;
              case 3:
                this.props.packagesNames.package3 =  pkgItem.package_name;
                break;
              case 4:
                this.props.packagesNames.package4 =  pkgItem.package_name;
                break;
              default:
              this.props.packagesNames.package1 = "Platinum";
              this.props.packagesNames.package2 = "Gold";
              this.props.packagesNames.package3 = "Silver";
              this.props.packagesNames.package4 = "Basic";
            }
          };
      }
  }

  renderPlan(planList) {
    var listProducts = planList.map((itm, index) =>
      <div style={{ "border": "1px solid #ccc", "padding": "3px 6px", "margin": " 5px" }} className="btn" key={"itmVl1" + index} >
        <span>{itm.title}</span>
      </div>
    );
    return listProducts;
  }
  render() {
    let { packagesNames } = this.props;
    return (
      <div className="plan-menu">
        <span id="prod-head">Products</span>
        <div className="menu-options">
          <div>
            <input type='text' className='form-control pkgname' defaultValue={packagesNames.package1} onBlur={this.getPackage1Name} ></input>
            <input type='text' className='form-control pkgname' defaultValue={packagesNames.package2} onBlur={this.getPackage2Name}  ></input>
            <input type='text' className='form-control pkgname' defaultValue={packagesNames.package3} onBlur={this.getPackage3Name}  ></input>
            <input type='text' className='form-control pkgname' defaultValue={packagesNames.package4} onBlur={this.getPackage4Name}  ></input>
          </div>
        </div>
      </div>
    )
  }
}
export default PlanMenu;
