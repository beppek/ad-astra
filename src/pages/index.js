import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout';
import UnstyledLink from '../components/Links';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    console.log(posts);
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">
                Latest messages from the future
              </h1>
            </div>
            {posts.map(({ node: post }) => (
              <div
                className="content"
                style={{ padding: '2em 4em' }}
                key={post.id}
              >
                <UnstyledLink key={post.id} to={post.fields.slug}>
                  <Card
                    header={post.frontmatter.title}
                    meta={post.date}
                    description={post.excerpt}
                    extra={<Link to={post.fields.slug}>Keep Reading →</Link>}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt={post.frontmatter.title}
                        // style={{ height: '340px' }}
                        image={post.frontmatter.image || '/img/space.jpg'}
                        title={post.frontmatter.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {post.frontmatter.title}
                        </Typography>
                        <Typography component="p">{post.excerpt}</Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Link className="button is-small" to={post.fields.slug}>
                        Keep Reading →
                      </Link>
                    </CardActions>
                  </Card>
                  {/* <p>
                    {post.frontmatter.title}
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p> */}
                </UnstyledLink>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            image
          }
        }
      }
    }
  }
`;
