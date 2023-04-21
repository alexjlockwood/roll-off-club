# 변형을 조기에 인식하는 방법

카운트다운 전에 보이는 전경에서 변형을 인식할 수 있습니다. 전경에서 어떤 변형인지 인식할 수 있으면 첫 번째 랩을 진행하면서 패턴을 알아낼 필요가 없어집니다.

아래는 롤 오프의 전경에서 주황색 및 파란색 패턴의 변형을 인식하는 데 도움이 되는 간단한 결정 트리입니다.

![흐름도](../images/advanced/recognizing-variants/flow-chart-light.jpg#only-light)
![흐름도](../images/advanced/recognizing-variants/flow-chart-dark.jpg#only-dark)

## 패턴

각 패턴을 조기에 인식하는 데 사용할 수 있는 전략은 아래에 설명되어 있습니다.

### 5 벽

[5 벽](../rolls/5-waller.md) 패턴은 앞쪽에는 기둥이 있고 뒤쪽에는 기둥이 없습니다. 아래 사진은 [주황색 5 벽](../rolls/5-waller.md) 패턴을 보여줍니다.

![5 벽](../images/advanced/recognizing-variants/5-waller.jpg)

### 고립된 듀오

[고립된 듀오](../rolls/isolated-duo.md) 패턴은 앞쪽에는 아무것도 없고 뒤쪽에는 기둥이 있습니다. 아래 사진은 [주황색 고립된 듀오](../rolls/isolated-duo.md#주황색-패턴) 패턴과 [파란색 고립된 듀오](../rolls/isolated-duo.md#파란색-패턴) 패턴을 보여줍니다.

![고립된 듀오](../images/advanced/recognizing-variants/isolated-duo.jpg)

### 닫힘-열림 & 열림-닫힘

[닫힘-열림 & 열림-닫힘](../rolls/closed-open-open-closed.md) 패턴은 앞쪽과 뒤쪽 모두 기둥이 있다는 것으로 구분할 수 있습니다. 아래 사진은 [주황색 닫힘-열림](../rolls/closed-open-open-closed.md#주황색-패턴) 패턴과 [파란색 열림-닫힘](../rolls/closed-open-open-closed.md#파란색-패턴) 패턴을 보여줍니다.

![닫힘-열림 & 열림-닫힘](../images/advanced/recognizing-variants/closed-open-open-closed.jpg)

### 이지 4

[이지 4](../rolls/easy-4.md) 패턴은 앞쪽에는 벽이 있고 뒤쪽에는 기둥이 있습니다. 아래 사진은 [주황색 이지 4](../rolls/easy-4.md#주황색-패턴) 패턴과 [파란색 이지 4](../rolls/easy-4.md#파란색-패턴) 패턴을 보여줍니다.

![이지 4](../images/advanced/recognizing-variants/easy-4.jpg)

### 그랜드 캐니언

[그랜드 캐니언](../rolls/grand-canyon.md) 패턴은 앞쪽과 뒤쪽이 벽으로 둘러싸여 있습니다. 아래 사진은 [파란색 그랜드 캐니언](../rolls/grand-canyon.md) 패턴을 보여줍니다.

![그랜드 캐니언 측면도](../images/advanced/recognizing-variants/grand-canyon.jpg)

[그랜드 캐니언](../rolls/grand-canyon.md) 패턴은 안쪽 모서리에 녹색 줄무늬가 있고 하단에 노란색 기둥이 있는 유일한 패턴입니다.

![그랜드 캐니언 측면도](../images/advanced/recognizing-variants/grand-canyon-side-view.jpg)

### 기둥 참호

[기둥 참호](../rolls/pillar-trench.md) 패턴은 [그랜드 캐니언](../rolls/grand-canyon.md) 패턴과 마찬가지로 앞쪽과 뒤쪽에 벽이 있습니다. 아래 사진은 [파란색 기둥 참호](../rolls/pillar-trench.md) 패턴을 보여줍니다.

![기둥 참호](../images/advanced/recognizing-variants/pillar-trench.jpg)

[기둥 참호](../rolls/pillar-trench.md) 패턴을 [그랜드 캐니언](../rolls/grand-canyon.md) 패턴과 구별하려면 안쪽 모서리에 주황색 줄무늬가 있고 하단에 보라색 기둥이 있는지 확인하세요.

![기둥 참호 측면도](../images/advanced/recognizing-variants/pillar-trench-side-view.jpg)

## 기타 팁

파란색 [고립된 듀오](../rolls/isolated-duo.md#파란색-패턴) 패턴은 안쪽 모서리에 보라색 줄무늬가 있는 유일한 파란색 패턴이기 때문에 모서리 안쪽에 보라색 줄무늬로 쉽게 알아볼 수 있습니다.

![파란색 고립된 듀오](../images/advanced/recognizing-variants/isolated-duo-blue-side-view.jpg)

마찬가지로, 파란색 [열림-닫힘](../rolls/closed-open-open-closed.md#파란색-패턴) 패턴은 모서리가 금색인 유일한 파란색 패턴이기 때문에 모서리 색상이 금색인 것으로 쉽게 알아볼 수 있습니다.

![파란색 고립된 듀오](../images/advanced/recognizing-variants/open-closed-blue-side-view.jpg)
