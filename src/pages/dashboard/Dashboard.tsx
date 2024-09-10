import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
} from "@mui/material";
import { getDashboardStyles } from "../../theme/dashboardTheme";
import { Project } from "../../types";

const projects: Project[] = [
  { id: 1, title: "Project Alpha", status: "In Progress" },
  { id: 2, title: "Project Beta", status: "In Progress" },
  { id: 3, title: "Project Gamma", status: "In Progress" },
  {
    id: 4,
    title: "Project Delta",
    status: "Completed",
    completedOn: "2024-08-20",
  },
  {
    id: 5,
    title: "Project Epsilon",
    status: "Completed",
    completedOn: "2024-07-15",
  },
  {
    id: 6,
    title: "Project Zeta",
    status: "Completed",
    completedOn: "2024-06-10",
  },
];

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const styles = getDashboardStyles(theme);

  const renderProjectCards = (projects: Project[]) =>
    projects.map((project) => (
      <Grid item xs={12} sm={6} md={4} key={project.id}>
        <Card sx={styles.card}>
          <CardHeader sx={styles.cardHeader} title={project.title} />
          <CardContent sx={styles.cardContent}>
            <Typography variant="body1">
              {project.completedOn
                ? `Completed on: ${project.completedOn}`
                : `Status: ${project.status}`}
            </Typography>
            <Divider sx={styles.divider} />
          </CardContent>
        </Card>
      </Grid>
    ));

  const inProgressProjects = projects.filter(
    (project) => project.status === "In Progress"
  );
  const completedProjects = projects.filter(
    (project) => project.status === "Completed"
  );

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="h5" gutterBottom>
        In Progress Tasks
      </Typography>
      <Grid container spacing={3}>
        {renderProjectCards(inProgressProjects)}
      </Grid>
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Completed Tasks
      </Typography>
      <Grid container spacing={3}>
        {renderProjectCards(completedProjects)}
      </Grid>
    </div>
  );
};

export default Dashboard;
