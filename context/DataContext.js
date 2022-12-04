import { createContext, useContext, useState, useEffect } from 'react'
import dataApi from '@api/data'

const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [calendar, setCalendar] = useState([])
  const [vouchers, setVouchers] = useState([])
  const [specialpacks, setSpecialpacks] = useState([])
  const [cabins, setCabins] = useState([])
  const [cabinbooked, setCabinbooked] = useState([])

  useEffect(() => {

    const fetchCalendar = () => {

        dataApi.get('/calendar').then(resp => {
            setCalendar(resp.data.calendar)
        })
    }

    const fetchVouchers = () => {
        dataApi.get('/vouchers').then(resp => {
            setVouchers(resp.data.vouchers)
        }).catch(err => console.log(err))
    }

    const fetchSpecialpacks = () => {
        dataApi.get('/specialpacks').then(resp => {
            setSpecialpacks(resp.data.specialpacks)
        }).catch(err => console.log(err))
    }

    const fetchCabins = () => {
        dataApi.get('/cabins').then(resp => {
            setCabins(resp.data.cabins)
        }).catch(err => console.log(err))
    }

    const fetchCabinBooked = () => {
      dataApi.get('/cabinbooked').then(resp => {
        setCabinbooked(resp.data.cabinbooked)
      }).catch(err => console.log(err)) 
    }

    fetchCalendar()
    fetchVouchers()
    fetchSpecialpacks()
    fetchCabins()
    fetchCabinBooked()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <DataContext.Provider
      value={{
        calendar,
        vouchers,
        specialpacks,
        cabins,
        cabinbooked
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  return useContext(DataContext)
}