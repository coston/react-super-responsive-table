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
							<Tr>
								<Td>31</Td>
								<Td>2017</Td>
								<Td>Alabama Community College System (ACCS)</Td>
								<Td>Mr. Toner Evans, Samford University</Td>
								<Td>Ms. Kelly Birchfield, Auburn University Montgomery</Td>
								<Td />
							</Tr>
							<Tr>
								<Td>30</Td>
								<Td>2016</Td>
								<Td>Samford University</Td>
								<Td>Ms. Angel Jowers, University of West Alabama</Td>
								<Td>Mr. Toner Evans, Samford University</Td>
								<Td>Academ(ia) Awards: Best Practices/Performances in IR</Td>
							</Tr>
							<Tr>
								<Td>29</Td>
								<Td>2015</Td>
								<Td>Eufaula (Wallace Community College Dothan)</Td>
								<Td>Dr. Annette Cederholm, Snead State Community College</Td>
								<Td>Ms. Angel Jowers, University of West Alabama</Td>
								<Td>Back to the Future</Td>
							</Tr>
							<Tr>
								<Td>28</Td>
								<Td>2014</Td>
								<Td>Huntsville (J.F. Drake State Community and Technical College)</Td>
								<Td>Dr. Jon C. Acker, The University of Alabama</Td>
								<Td>Dr. Annette Cederholm, Snead State Community College</Td>
								<Td>Institutional Research…and Beyond!</Td>
							</Tr>
							<Tr>
								<Td>27</Td>
								<Td>2013</Td>
								<Td>The University of Alabama</Td>
								<Td>Mr. John McIntosh, Northwest-Shoals Community College</Td>
								<Td>Dr. Jon C. Acker, The University of Alabama</Td>
								<Td>Moving the Ball Forward</Td>
							</Tr>
							<Tr>
								<Td>26</Td>
								<Td>2012</Td>
								<Td>Fairhope (Faulkner State Community College)</Td>
								<Td>Mr. John McIntosh, Northwest-Shoals Community College</Td>
								<Td>Mr. John McIntosh, Northwest-Shoals Community College</Td>
								<Td>Institutional Research: Gaining Insight and Promoting Improvement</Td>
							</Tr>
							<Tr>
								<Td>25</Td>
								<Td>2011</Td>
								<Td>Troy University</Td>
								<Td>Ms. Tara George, Jefferson State Community College</Td>
								<Td>Ms. Patricia Pratt, University of West Alabama</Td>
								<Td>The ART of Institutional Research</Td>
							</Tr>
							<Tr>
								<Td>24</Td>
								<Td>2010</Td>
								<Td>Florence (University of North Alabama)</Td>
								<Td>Dr. Alicia Simmons, Jacksonville State University</Td>
								<Td>Ms. Tara George, Jefferson State Community College</Td>
								<Td>In Tune with IR</Td>
							</Tr>
							<Tr>
								<Td>23</Td>
								<Td>2009</Td>
								<Td>Opelika (Auburn University)</Td>
								<Td>Ms. Diane Sherman, Alabama Commission on Higher Education (ACHE)</Td>
								<Td>Dr. Alicia Simmons, Jacksonville State University</Td>
								<Td>Making Difficult Decisions in Challenging Times</Td>
							</Tr>
							<Tr>
								<Td>22</Td>
								<Td>2008</Td>
								<Td>Jacksonville State University</Td>
								<Td>Dr. Yardley Bailey, University of Alabama System</Td>
								<Td>Ms. Diane Sherman, Alabama Commission on Higher Education (ACHE)</Td>
								<Td>A Breath of Fresh AIR</Td>
							</Tr>
							<Tr>
								<Td>21</Td>
								<Td>2007</Td>
								<Td>Alabama A&M University</Td>
								<Td>Dr. Sarah Latham, Samford University</Td>
								<Td>Dr. Yardley Bailey, University of Alabama System</Td>
								<Td>Institutional Research: Is it Rocket Science?</Td>
							</Tr>
							<Tr>
								<Td>20</Td>
								<Td>2006</Td>
								<Td>The University of Alabama</Td>
								<Td>Dr. Cara Mia Pugh, Auburn University</Td>
								<Td>Dr. Sarah Latham, Samford University</Td>
								<Td>Twenty Years Later: New Challenges…New Opportunities</Td>
							</Tr>
							<Tr>
								<Td>19</Td>
								<Td>2005</Td>
								<Td>Fairhope (Faulkner State Community College)</Td>
								<Td>Ms. Kris Mascetti, Auburn University at Montgomery</Td>
								<Td>Dr. Cara Mia Pugh, Auburn University</Td>
								<Td>Off to a Good Start</Td>
							</Tr>
							<Tr>
								<Td>18</Td>
								<Td>2004</Td>
								<Td>University of Alabama at Birmingham</Td>
								<Td>Mr. Dan Tennimon, Troy State University Montgomery</Td>
								<Td>Ms. Kris Mascetti, Auburn University at Montgomery</Td>
								<Td>Research-Based Planning and Evaluation</Td>
							</Tr>
							<Tr>
								<Td>17</Td>
								<Td>2003</Td>
								<Td>Troy State University Montgomery</Td>
								<Td>Dr. Jim Eck, Samford University</Td>
								<Td>Mr. Dan Tennimon, Troy State University Montgomery</Td>
								<Td>Non-Traditional: The New Majority</Td>
							</Tr>
							<Tr>
								<Td>16</Td>
								<Td>2002</Td>
								<Td>Samford University</Td>
								<Td>Dr. Priscilla Holland, University of North Alabama</Td>
								<Td>Dr. Jim Eck, Samford University</Td>
								<Td>Alike or Different?: Product Differentiation and the Institutional Researcher</Td>
							</Tr>
							<Tr>
								<Td>15</Td>
								<Td>2001</Td>
								<Td>University of North Alabama</Td>
								<Td>Ms. Mimi McDaniel Johnson, Alabama State University</Td>
								<Td>Dr. Priscilla Holland, University of North Alabama</Td>
								<Td>Data Driven Decisions</Td>
							</Tr>
							<Tr>
								<Td>14</Td>
								<Td>2000</Td>
								<Td>Gulf Shores (Faulkner State Community College and Bishop State Community College)</Td>
								<Td>Ms. Teresa Hall, University of Alabama at Birmingham</Td>
								<Td>Ms. Mimi McDaniel Johnson, Alabama State University</Td>
								<Td>IR: Thinking Outside of the Box</Td>
							</Tr>
							<Tr>
								<Td>13</Td>
								<Td>1999</Td>
								<Td>Auburn University</Td>
								<Td>Dr. Anna T. Waggener, University of South Alabama</Td>
								<Td>Ms. Teresa Hall, University of Alabama at Birmingham</Td>
								<Td>Ready or Not, It's Here: IR Meets Y2K</Td>
							</Tr>
							<Tr>
								<Td>12</Td>
								<Td>1998</Td>
								<Td>University of Alabama in Huntsville</Td>
								<Td>Dr. Myrtes Dunn Green, Stillman College</Td>
								<Td>Dr. Anna T. Waggener, University of South Alabama</Td>
								<Td>Challenges and Responses: Anticipating the Twenty-First Century</Td>
							</Tr>
							<Tr>
								<Td>11</Td>
								<Td>1997</Td>
								<Td>The University of Alabama</Td>
								<Td>Dr. Julia S. Rogers, University of Montevallo</Td>
								<Td>Dr. Myrtes Dunn Green, Stillman College</Td>
								<Td>Public Perceptions and Misperceptions of Accountability: The Challenges for Institutional Research</Td>
							</Tr>
							<Tr>
								<Td>10</Td>
								<Td>1996</Td>
								<Td>Samford University</Td>
								<Td>Mr. Sam Lowther, Auburn University</Td>
								<Td>Dr. Julia S. Rogers, University of Montevallo</Td>
								<Td>Indicators, Outcomes, and Effectiveness: Quantifying the Past and Preparing for the Future</Td>
							</Tr>
							<Tr>
								<Td>9</Td>
								<Td>1995</Td>
								<Td>Troy State University Dothan</Td>
								<Td>Dr. Judy Miller, Enterprise State Junior College</Td>
								<Td>Mr. Sam Lowther, Auburn University</Td>
								<Td>The Changing Face of Institutional Research: New Responsibilities and New Techniques</Td>
							</Tr>
							<Tr>
								<Td>8</Td>
								<Td>1994</Td>
								<Td>University of Alabama in Huntsville</Td>
								<Td>Dr. Harriott D. Calhoun, Jefferson State Community College</Td>
								<Td>Dr. Judy Miller, Enterprise State Junior College</Td>
								<Td>Technology and Ethics: Implications for Institutional Research</Td>
							</Tr>
							<Tr>
								<Td>7</Td>
								<Td>1993</Td>
								<Td>University of Montevallo</Td>
								<Td>Dr. Albert M. Searway, Jacksonville State University</Td>
								<Td>Dr. Harriott D. Calhoun, Jefferson State Community College</Td>
								<Td>Quality and Effectiveness - Issues of the Decade</Td>
							</Tr>
							<Tr>
								<Td>6</Td>
								<Td>1992</Td>
								<Td>University of South Alabama</Td>
								<Td>Mr. Don E. Dailey, University of Alabama at Birmingham</Td>
								<Td>Dr. Albert M. Searway, Jacksonville State University</Td>
								<Td>Effectiveness in Higher Education</Td>
							</Tr>
							<Tr>
								<Td>5</Td>
								<Td>1991</Td>
								<Td>The University of Alabama</Td>
								<Td>Dr. Kitty C. Collier, Alabama Commission on Higher Education (ACHE)</Td>
								<Td>Mr. Don E. Dailey, University of Alabama at Birmingham</Td>
								<Td>Putting It All Together: Institutional Research and Planning in the 1990's</Td>
							</Tr>
							<Tr>
								<Td>4</Td>
								<Td>1990</Td>
								<Td>Auburn University</Td>
								<Td>Ms. Debbie Dailey, University of Alabama at Birmingham</Td>
								<Td>Dr. Kitty C. Collier, Alabama Commission on Higher Education (ACHE)</Td>
								<Td>From Statistics to Strategy: Making the Most of Institutional Research</Td>
							</Tr>
							<Tr>
								<Td>3</Td>
								<Td>1989</Td>
								<Td>University of Alabama at Birmingham</Td>
								<Td>Dr. Thomas McAlpine, Alabama A&M University</Td>
								<Td>Ms. Debbie Dailey, University of Alabama at Birmingham</Td>
								<Td>Developing the Institutional Research Office: A Nuts and Bolts Approach</Td>
							</Tr>
							<Tr>
								<Td>2</Td>
								<Td>1988</Td>
								<Td>Alabama State University</Td>
								<Td>Mr. Alfred H. Yeager, University of South Alabama</Td>
								<Td>Dr. Thomas McAlpine, Alabama A&M University</Td>
								<Td>Building and Expanding Institutional Research</Td>
							</Tr>
							<Tr>
								<Td>1</Td>
								<Td>1987</Td>
								<Td>Birmingham (Organizational Meeting)</Td>
								<Td>Ms. Kay Staub, The University of Alabama (Convener)</Td>
								<Td>Dr. Gerald S. Leischuck, Auburn University</Td>
								<Td>Strategic Planning and Outcomes Assessment</Td>
							</Tr>
						</Tbody>
					</Table>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))
