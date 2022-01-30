import React, {useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState} from 'react';
import {Animated} from 'react-native';
import CrewMemberFullInfo from '../components/CrewMemberFullInfo';
import GoBackButton from '../components/GoBackButton';
import {screenStyles} from '../constants/styles/ScreenStyles';
import {CrewMemberScreenProps} from '../types/navigation/RootNavigaton';
import WebView from 'react-native-webview';

const CrewMemberScreen: React.FC<CrewMemberScreenProps> = ({navigation, route}) => {
  const member = route.params.member;
  const [visibleInfo, setVisibleInfo] = useState<'Member' | 'Wiki'>('Member');
  const animOpacity = useRef(new Animated.Value(1));

  const {current: fadeIn} = useRef(
    Animated.timing(animOpacity.current, {toValue: 1, duration: 500, useNativeDriver: true}),
  );

  const {current: fadeOut} = useRef(
    Animated.timing(animOpacity.current, {toValue: 0, duration: 500, useNativeDriver: true}),
  );

  useEffect(() => {
    fadeIn.start();
  }, [visibleInfo]);

  const onBackPressHandle = useCallback(() => {
    if (visibleInfo === 'Member') {
      navigation.goBack();
      return;
    }

    fadeOut.start(() => setVisibleInfo('Member'));
  }, [visibleInfo]);

  useLayoutEffect(
    () =>
      navigation.setOptions({
        headerTitle: route.params.member.name,
        headerLeft: () => <GoBackButton onPress={onBackPressHandle} />,
      }),
    [member, onBackPressHandle],
  );

  const {current: onSeeWikiPressHandle} = useRef(() => {
    fadeOut.start(() => setVisibleInfo('Wiki'));
  });

  const content = useMemo(() => {
    if (visibleInfo === 'Wiki') {
      return <WebView source={{uri: member.wikipedia}} scrollEnabled />;
    }

    return <CrewMemberFullInfo onSeeWikiPress={onSeeWikiPressHandle} member={member} />;
  }, [member, visibleInfo]);

  return <Animated.View style={[screenStyles.flex, {opacity: animOpacity.current}]}>{content}</Animated.View>;
};

export default CrewMemberScreen;
