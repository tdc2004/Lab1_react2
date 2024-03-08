import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Button } from 'react-native';

const Bai2 = () => {
    const [data, setData] = useState([]);
    const [expandedSection, setExpandedSection] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch("http://10.0.2.2:3000/eventInfo");
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const handlePressItem = (item) => {
        setExpandedSection(item.id === expandedSection ? null : item.id);
    };

    const renderSection = ({ item }) => {
        const isExpanded = item.id === expandedSection;

        return (
            <View style={{ marginBottom: 5, alignSelf: 'center', justifyContent: 'center', padding: 15, elevation: 5, borderRadius: 5,width:380 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>{item.title}</Text>

                <View style={{ marginBottom: 5 }}>
                    <Text>Địa điểm: {item.location}</Text>
                    <Text>Thời gian: {item.time}</Text>
                    <Text>Phương tiện: {item.transportation}</Text>
                </View>

                {isExpanded && <Image source={{ uri: item.image }} style={{ width: 350, height: 200, resizeMode: 'cover', marginBottom: 10 }} />}
                <Button title={isExpanded ? 'Thu gọn' : 'Xem Chi Tiết'} onPress={() => handlePressItem(item)} />
            </View>
        );
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderSection}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default Bai2;
