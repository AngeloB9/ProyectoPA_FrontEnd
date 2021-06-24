import React, { Component } from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SchoolIcon from '@material-ui/icons/School';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
//Versión 1 del navbar
class Prueba extends Component {
  render() {
    return (
      <div className='contenedorBarrafootF'>
        <div className='barrafootF'>
          <table className='footIconTableF'>
            <tbody>
              <tr>
                <td className='footiconF'>
                  <a
                    className='footLink text-reset text-decoration-none'
                    target='_blank'
                    href='https://www.facebook.com'
                    rel='noopener noreferrer'>
                    <FacebookIcon style={{ fontSize: 45 }} />
                  </a>
                </td>
                <td className='footiconF'>
                  <a
                    className='footLink text-reset text-decoration-none'
                    target='_blank'
                    href='https://www.twitter.com'
                    rel='noopener noreferrer'>
                    <TwitterIcon style={{ fontSize: 45 }} />
                  </a>
                </td>
                <td className='footiconF'>
                  <a
                    className='footLink text-reset text-decoration-none'
                    target='_blank'
                    href='https://www.youtube.com'
                    rel='noopener noreferrer'>
                    <YouTubeIcon style={{ fontSize: 45 }} />
                  </a>
                </td>
                <td className='footiconF'>
                  <a
                    className='footLink text-reset text-decoration-none'
                    target='_blank'
                    href='https://www.linkedin.com/in/angelo-benavidez-740874136/'
                    rel='noopener noreferrer'>
                    <LinkedInIcon style={{ fontSize: 45 }} />
                  </a>
                </td>
                <td className='footiconF'>
                  <a
                    className='footLink text-reset text-decoration-none'
                    target='_blank'
                    href='https://www.instagram.com'
                    rel='noopener noreferrer'>
                    <InstagramIcon style={{ fontSize: 45 }} />
                  </a>
                </td>
                <td className='footiconF'>
                  <a
                    className='footLink text-reset text-decoration-none'
                    target='_blank'
                    href='https://www.puce.edu.ec'
                    rel='noopener noreferrer'>
                    <SchoolIcon style={{ fontSize: 45 }} />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <div className='footLinea1F'>
            <table className='footItemTableF'>
              <tbody>
                <tr>
                  <td className='footitemF'>
                    <ul className='footLinkList'>
                      <li>
                        <h6 className='footTitle'>Github</h6>
                      </li>
                      <li>
                        <a
                          className='footLink'
                          href='https://github.com/AngeloB9/ProyectoPA_FrontEnd'
                          target='_blank'
                          rel='noopener noreferrer'>
                          Frontend
                        </a>
                      </li>

                      <li>
                        <a
                          className='footLink'
                          href='https://github.com/AngeloB9/ProyectoPA-Backend'
                          target='_blank'
                          rel='noopener noreferrer'>
                          Backend
                        </a>
                      </li>
                    </ul>
                  </td>
                  <td className='footitemF'>
                    <ul className='footLinkList'>
                      <li>
                        <h6 className='footTitle'>Tecnologías</h6>
                      </li>
                      <li>
                        <a
                          className='footLink'
                          href='https://nextjs.org/docs'
                          target='_blank'
                          rel='noopener noreferrer'>
                          Next Js
                        </a>
                      </li>
                      <li>
                        <a
                          className='footLink'
                          href='https://docs.microsoft.com/en-us/dotnet/framework/'
                          target='_blank'
                          rel='noopener noreferrer'>
                          .NetFramework
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='HuellaPersonal'>
            Made with Love 🤍 by Angelo Benavidez
          </div>
          <div className='footInfo'>
            <table className='footInfoTable'>
              <tbody>
                <tr>
                  <td>2021 © Tickets PA.</td>
                  <td className='infoDerecha'>Programación Avanzada</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Prueba;
