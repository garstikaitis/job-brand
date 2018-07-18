import React from 'react';
import UserApi from '../../utils/UserApi';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from '../../../node_modules/@material-ui/core';

class UserCompaniesWidget extends React.Component {
  state = {
    user: {},
    loading: true,
  };
  async componentDidMount() {
    this.setState({
      user: await UserApi.getUserById('5b4f7781ec2ad5389bcf824a'),
      loading: false,
    });
  }

  renderCompanies = () => {
    if (!this.state.loading) {
      return this.state.user.companies.map(company => {
        return (
          <Grid key={company._id} item xs={6}>
            <Card>
              <CardContent>
                <Typography>{company.name}</Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="secondary">
                  Visit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      });
    } else {
      return <div>Loading..</div>;
    }
  };

  render() {
    return (
      <Grid alignItems="center" container spacing={40}>
        {this.renderCompanies()}
      </Grid>
    );
  }
}

export default UserCompaniesWidget;
