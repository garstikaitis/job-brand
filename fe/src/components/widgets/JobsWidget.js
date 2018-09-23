import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const renderJobs = company => {
  if (company.jobs) {
    return company.jobs.map(job => {
      return (
        <TableRow>
          <Link
            to={{
              pathname: `/companies/${company.slug}/${job.slug}`,
              state: job,
            }}
          >
            <TableCell padding="dense" component="tr" scope="row" key={job._id}>
              <td>{job.title}</td>
            </TableCell>
          </Link>
        </TableRow>
      );
    });
  }
};
const JobsWidget = props => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell component="th">Job title</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{renderJobs(props.organization)}</TableBody>
    </Table>
  );
};

export default JobsWidget;
