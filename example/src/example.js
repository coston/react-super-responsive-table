import React from 'react'
import ReactDOM from 'react-dom'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

class App extends React.Component {
  render () {
    return (
      <div>
        <Table>
          <Thead>
            <Tr>
              <Th>Annual Conference</Th>
              <Th>Year</Th>
              <Th>Location</Th>
              <Th>President</Th>
              <Th>Program Chair</Th>
              <Th>Conference Theme</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((datum, index) => (
              <Tr key={index}>
								<Td>{datum.Conference}</Td>
								<Td>{datum.Year}</Td>
								<Td>{datum.Location}</Td>
								<Td>{datum.President}</Td>
								<Td>{datum.Chair}</Td>
								<Td>{datum.Theme}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    )
  }
}

const data = [{
  'Conference': 31,
  'Year': 2017,
  'Location': 'Alabama Community College System (ACCS)',
  'President': 'Mr. Toner Evans, Samford University',
  'Chair': 'Ms. Kelly Birchfield, Auburn University Montgomery',
  'Theme': 'COMMUNITY!'
},
{
  'Conference': 30,
  'Year': 2016,
  'Location': 'Samford University',
  'President': 'Ms. Angel Jowers, University of West Alabama',
  'Chair': 'Mr. Toner Evans, Samford University',
  'Theme': 'Academ(ia) Awards: Best Practices/Performances in IR'
},
{
  'Conference': 29,
  'Year': 2015,
  'Location': 'Eufaula (Wallace Community College Dothan)',
  'President': 'Dr. Annette Cederholm, Snead State Community College',
  'Chair': 'Ms. Angel Jowers, University of West Alabama',
  'Theme': 'Back to the Future'
},
{
  'Conference': 28,
  'Year': 2014,
  'Location': 'Huntsville (J.F. Drake State Community and Technical College)',
  'President': 'Dr. Jon C. Acker, The University of Alabama',
  'Chair': 'Dr. Annette Cederholm, Snead State Community College',
  'Theme': 'Institutional Research…and Beyond!'
},
{
  'Conference': 27,
  'Year': 2013,
  'Location': 'The University of Alabama',
  'President': 'Mr. John McIntosh, Northwest-Shoals Community College',
  'Chair': 'Dr. Jon C. Acker, The University of Alabama',
  'Theme': 'Moving the Ball Forward'
},
{
  'Conference': 26,
  'Year': 2012,
  'Location': 'Fairhope (Faulkner State Community College)',
  'President': 'Mr. John McIntosh, Northwest-Shoals Community College',
  'Chair': 'Mr. John McIntosh, Northwest-Shoals Community College',
  'Theme': 'Institutional Research: Gaining Insight and Promoting Improvement'
},
{
  'Conference': 25,
  'Year': 2011,
  'Location': 'Troy University',
  'President': 'Ms. Tara George, Jefferson State Community College',
  'Chair': 'Ms. Patricia Pratt, University of West Alabama',
  'Theme': 'The ART of Institutional Research'
},
{
  'Conference': 24,
  'Year': 2010,
  'Location': 'Florence (University of North Alabama)',
  'President': 'Dr. Alicia Simmons, Jacksonville State University',
  'Chair': 'Ms. Tara George, Jefferson State Community College',
  'Theme': 'In Tune with IR'
},
{
  'Conference': 23,
  'Year': 2009,
  'Location': 'Opelika (Auburn University)',
  'President': 'Ms. Diane Sherman, Alabama Commission on Higher Education (ACHE)',
  'Chair': 'Dr. Alicia Simmons, Jacksonville State University',
  'Theme': 'Making Difficult Decisions in Challenging Times'
},
{
  'Conference': 22,
  'Year': 2008,
  'Location': 'Jacksonville State University',
  'President': 'Dr. Yardley Bailey, University of Alabama System',
  'Chair': 'Ms. Diane Sherman, Alabama Commission on Higher Education (ACHE)',
  'Theme': 'A Breath of Fresh AIR'
},
{
  'Conference': 21,
  'Year': 2007,
  'Location': 'Alabama A&M University',
  'President': 'Dr. Sarah Latham, Samford University',
  'Chair': 'Dr. Yardley Bailey, University of Alabama System',
  'Theme': 'Institutional Research: Is it Rocket Science?'
},
{
  'Conference': 20,
  'Year': 2006,
  'Location': 'The University of Alabama',
  'President': 'Dr. Cara Mia Pugh, Auburn University',
  'Chair': 'Dr. Sarah Latham, Samford University',
  'Theme': 'Twenty Years Later: New Challenges…New Opportunities'
},
{
  'Conference': 19,
  'Year': 2005,
  'Location': 'Fairhope (Faulkner State Community College)',
  'President': 'Ms. Kris Mascetti, Auburn University at Montgomery',
  'Chair': 'Dr. Cara Mia Pugh, Auburn University',
  'Theme': 'Off to a Good Start'
},
{
  'Conference': 18,
  'Year': 2004,
  'Location': 'University of Alabama at Birmingham',
  'President': 'Mr. Dan Tennimon, Troy State University Montgomery',
  'Chair': 'Ms. Kris Mascetti, Auburn University at Montgomery',
  'Theme': 'Research-Based Planning and Evaluation'
},
{
  'Conference': 17,
  'Year': 2003,
  'Location': 'Troy State University Montgomery',
  'President': 'Dr. Jim Eck, Samford University',
  'Chair': 'Mr. Dan Tennimon, Troy State University Montgomery',
  'Theme': 'Non-Traditional: The New Majority'
},
{
  'Conference': 16,
  'Year': 2002,
  'Location': 'Samford University',
  'President': 'Dr. Priscilla Holland, University of North Alabama',
  'Chair': 'Dr. Jim Eck, Samford University',
  'Theme': 'Alike or Different?: Product Differentiation and the Institutional Researcher'
},
{
  'Conference': 15,
  'Year': 2001,
  'Location': 'University of North Alabama',
  'President': 'Ms. Mimi McDaniel Johnson, Alabama State University',
  'Chair': 'Dr. Priscilla Holland, University of North Alabama',
  'Theme': 'Data Driven Decisions'
},
{
  'Conference': 14,
  'Year': 2000,
  'Location': 'Gulf Shores (Faulkner State Community College and Bishop State Community College)',
  'President': 'Ms. Teresa Hall, University of Alabama at Birmingham',
  'Chair': 'Ms. Mimi McDaniel Johnson, Alabama State University',
  'Theme': 'IR: Thinking Outside of the Box'
},
{
  'Conference': 13,
  'Year': 1999,
  'Location': 'Auburn University',
  'President': 'Dr. Anna T. Waggener, University of South Alabama',
  'Chair': 'Ms. Teresa Hall, University of Alabama at Birmingham',
  'Theme': "Ready or Not, It's Here: IR Meets Y2K"
},
{
  'Conference': 12,
  'Year': 1998,
  'Location': 'University of Alabama in Huntsville',
  'President': 'Dr. Myrtes Dunn Green, Stillman College',
  'Chair': 'Dr. Anna T. Waggener, University of South Alabama',
  'Theme': 'Challenges and Responses: Anticipating the Twenty-First Century'
},
{
  'Conference': 11,
  'Year': 1997,
  'Location': 'The University of Alabama',
  'President': 'Dr. Julia S. Rogers, University of Montevallo',
  'Chair': 'Dr. Myrtes Dunn Green, Stillman College',
  'Theme': 'Public Perceptions and Misperceptions of Accountability: The Challenges for Institutional Research'
},
{
  'Conference': 10,
  'Year': 1996,
  'Location': 'Samford University',
  'President': 'Mr. Sam Lowther, Auburn University',
  'Chair': 'Dr. Julia S. Rogers, University of Montevallo',
  'Theme': 'Indicators, Outcomes, and Effectiveness: Quantifying the Past and Preparing for the Future'
},
{
  'Conference': 9,
  'Year': 1995,
  'Location': 'Troy State University Dothan',
  'President': 'Dr. Judy Miller, Enterprise State Junior College',
  'Chair': 'Mr. Sam Lowther, Auburn University',
  'Theme': 'The Changing Face of Institutional Research: New Responsibilities and New Techniques'
},
{
  'Conference': 8,
  'Year': 1994,
  'Location': 'University of Alabama in Huntsville',
  'President': 'Dr. Harriott D. Calhoun, Jefferson State Community College',
  'Chair': 'Dr. Judy Miller, Enterprise State Junior College',
  'Theme': 'Technology and Ethics: Implications for Institutional Research'
},
{
  'Conference': 7,
  'Year': 1993,
  'Location': 'University of Montevallo',
  'President': 'Dr. Albert M. Searway, Jacksonville State University',
  'Chair': 'Dr. Harriott D. Calhoun, Jefferson State Community College',
  'Theme': 'Quality and Effectiveness - Issues of the Decade'
},
{
  'Conference': 6,
  'Year': 1992,
  'Location': 'University of South Alabama',
  'President': 'Mr. Don E. Dailey, University of Alabama at Birmingham',
  'Chair': 'Dr. Albert M. Searway, Jacksonville State University',
  'Theme': 'Effectiveness in Higher Education'
},
{
  'Conference': 5,
  'Year': 1991,
  'Location': 'The University of Alabama',
  'President': 'Dr. Kitty C. Collier, Alabama Commission on Higher Education (ACHE)',
  'Chair': 'Mr. Don E. Dailey, University of Alabama at Birmingham',
  'Theme': "Putting It All Together: Institutional Research and Planning in the 1990's"
},
{
  'Conference': 4,
  'Year': 1990,
  'Location': 'Auburn University',
  'President': 'Ms. Debbie Dailey, University of Alabama at Birmingham',
  'Chair': 'Dr. Kitty C. Collier, Alabama Commission on Higher Education (ACHE)',
  'Theme': 'From Statistics to Strategy: Making the Most of Institutional Research'
},
{
  'Conference': 3,
  'Year': 1989,
  'Location': 'University of Alabama at Birmingham',
  'President': 'Dr. Thomas McAlpine, Alabama A&M University',
  'Chair': 'Ms. Debbie Dailey, University of Alabama at Birmingham',
  'Theme': 'Developing the Institutional Research Office: A Nuts and Bolts Approach'
},
{
  'Conference': 2,
  'Year': 1988,
  'Location': 'Alabama State University',
  'President': 'Mr. Alfred H. Yeager, University of South Alabama',
  'Chair': 'Dr. Thomas McAlpine, Alabama A&M University',
  'Theme': 'Building and Expanding Institutional Research'
},
{
  'Conference': 1,
  'Year': 1987,
  'Location': 'Birmingham (Organizational Meeting)',
  'President': 'Ms. Kay Staub, The University of Alabama (Convener)',
  'Chair': 'Dr. Gerald S. Leischuck, Auburn University',
  'Theme': 'Strategic Planning and Outcomes Assessment'
}]

ReactDOM.render(<App />, document.getElementById('app'))

