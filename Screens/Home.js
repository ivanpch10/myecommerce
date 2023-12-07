import { StyleSheet, Text, View } from 'react-native'
import Categories from '../Components/Categories'
import Header from '../Components/Header'
import React from 'react'

const Home = () => {
  return (
    <>
        <Header title='Categories'/>
        <Categories setCategorySelected={setCategorySelected}/>
    </>
  )
}

export default Home

const styles = StyleSheet.create({})