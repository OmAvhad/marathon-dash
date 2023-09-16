import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
    CFormTextarea,
    CRow,
    CImage,
    CCardImage,
    CCardTitle,
    CCardText,
  } from '@coreui/react'
import ReactImg from '../../assets/images/download.png'

function CampaignCard() {
    const [ data, setData ] = useState(null)
    useEffect(() => {
        axios.get(`http://172.16.40.8/pastMarathon/`)
          .then((res) => {
            console.log(res.data.data)
            setData(res.data.data)
          })
          .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <div className='d-flex gap-5'>
            {data &&
                data.map((item) => (
                    <CCard style={{ width: '18rem' }}>
                        <CCardImage orientation="top" src={item.img} />
                        <CCardBody>
                            <CCardTitle>{item.eventName}</CCardTitle>
                            <CCardText className='overflow-hidden' style={{ height: '5rem'}}>
                            {item.prMessage}
                            </CCardText>
                            <CButton href="#">Go somewhere</CButton>
                        </CCardBody>
                    </CCard>
                ))
            }
        </div>
    )
}

export default CampaignCard