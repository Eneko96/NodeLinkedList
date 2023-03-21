"use strict";class t{constructor(t,e){this.value=t,this.next=e}}class e{constructor(t,e,l){this.value=t,this.next=e,this.prev=l}}exports.DoubleLinkedList=class{constructor(){this.head=null,this.tail=null}insertNode(t){const l=new e(t,null,null);this.head?(this.tail.next=l,l.prev=this.tail,this.tail=l):(this.head=l,this.tail=l)}removeNode(t){let e=this.head;for(;e;)e.value===t&&(e===this.head?(this.head=this.head.next,this.head.prev=null):e===this.tail?(this.tail=this.tail.prev,this.tail.next=null):(e.prev.next=e.next,e.next.prev=e.prev)),e=e.next}print(){let t=this.head;for(;t;)console.log(t.value),t=t.next}},exports.LinkedList=class{constructor(){this.head=null}insertNode(e){const l=new t(e,null);if(null===this.head)this.head=l;else{let t=this.head;for(;t.next;)t=t.next;t.next=l}}print(){let t=this.head;for(;t;)console.log(t.value),t=t.next}findNode(t){let e=this.head;for(;e;){if(e.value===t)return e;e=e.next}return null}deleteNode(t){let e=this.head;for(;e.value!==t;){if(e.value===t)return void(e.value=e.next.next);e=e.next}}};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL2luZGV4Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IodmFsdWUsIG5leHQpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5uZXh0ID0gbmV4dDtcbiAgfVxufVxuXG5jbGFzcyBEb3VibGVOb2RlIHtcbiAgY29uc3RydWN0b3IodmFsdWUsIG5leHQsIHByZXYpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5uZXh0ID0gbmV4dDtcbiAgICB0aGlzLnByZXYgPSBwcmV2O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb3VibGVMaW5rZWRMaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oZWFkID0gbnVsbDtcbiAgICB0aGlzLnRhaWwgPSBudWxsO1xuICB9XG5cbiAgaW5zZXJ0Tm9kZSh2YWx1ZSkge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgRG91YmxlTm9kZSh2YWx1ZSwgbnVsbCwgbnVsbCk7XG5cbiAgICBpZiAoIXRoaXMuaGVhZCkge1xuICAgICAgdGhpcy5oZWFkID0gbm9kZTtcbiAgICAgIHRoaXMudGFpbCA9IG5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgIG5vZGUucHJldiA9IHRoaXMudGFpbDtcbiAgICAgIHRoaXMudGFpbCA9IG5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlTm9kZSh2YWx1ZSkge1xuICAgIGxldCBub2RlID0gdGhpcy5oZWFkO1xuXG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgIGlmIChub2RlLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICBpZiAobm9kZSA9PT0gdGhpcy5oZWFkKSB7XG4gICAgICAgICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgICAgICAgdGhpcy5oZWFkLnByZXYgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGUgPT09IHRoaXMudGFpbCkge1xuICAgICAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5wcmV2O1xuICAgICAgICAgIHRoaXMudGFpbC5uZXh0ID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlLnByZXYubmV4dCA9IG5vZGUubmV4dDtcbiAgICAgICAgICBub2RlLm5leHQucHJldiA9IG5vZGUucHJldjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgIH1cbiAgfVxuXG4gIHByaW50KCkge1xuICAgIGxldCBub2RlID0gdGhpcy5oZWFkO1xuXG4gICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKG5vZGUudmFsdWUpO1xuICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICB9XG4gIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgTGlua2VkTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGVhZCA9IG51bGxcbiAgfSBcblxuICBpbnNlcnROb2RlKHZhbHVlKSB7XG4gICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKHZhbHVlLCBudWxsKVxuICAgIGlmICh0aGlzLmhlYWQgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuaGVhZCA9IG5ld05vZGVcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICB3aGlsZSAoY3VycmVudC5uZXh0KSB7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICB9XG4gICAgICBjdXJyZW50Lm5leHQgPSBuZXdOb2RlXG4gICAgfVxuICB9XG5cbiAgcHJpbnQoKSB7XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnQudmFsdWUpO1xuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG4gIH1cblxuICBmaW5kTm9kZSh2YWx1ZSkge1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICBpZiAoY3VycmVudC52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGRlbGV0ZU5vZGUodmFsdWUpIHtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICB3aGlsZSAoY3VycmVudC52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIGlmIChjdXJyZW50LnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICBjdXJyZW50LnZhbHVlID0gY3VycmVudC5uZXh0Lm5leHRcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0XG4gICAgfVxuICB9XG5cbn1cblxuXG4iXSwibmFtZXMiOlsiTm9kZSIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJuZXh0IiwidGhpcyIsIkRvdWJsZU5vZGUiLCJwcmV2IiwiaGVhZCIsInRhaWwiLCJpbnNlcnROb2RlIiwibm9kZSIsInJlbW92ZU5vZGUiLCJwcmludCIsImNvbnNvbGUiLCJsb2ciLCJuZXdOb2RlIiwiY3VycmVudCIsImZpbmROb2RlIiwiZGVsZXRlTm9kZSJdLCJtYXBwaW5ncyI6ImFBQUEsTUFBTUEsRUFDSkMsWUFBWUMsRUFBT0MsR0FDakJDLEtBQUtGLE1BQVFBLEVBQ2JFLEtBQUtELEtBQU9BLENBQ2QsRUFHRixNQUFNRSxFQUNKSixZQUFZQyxFQUFPQyxFQUFNRyxHQUN2QkYsS0FBS0YsTUFBUUEsRUFDYkUsS0FBS0QsS0FBT0EsRUFDWkMsS0FBS0UsS0FBT0EsQ0FDZCwyQkFHSyxNQUNMTCxjQUNFRyxLQUFLRyxLQUFPLEtBQ1pILEtBQUtJLEtBQU8sSUFDZCxDQUVBQyxXQUFXUCxHQUNULE1BQU1RLEVBQU8sSUFBSUwsRUFBV0gsRUFBTyxLQUFNLE1BRXBDRSxLQUFLRyxNQUlSSCxLQUFLSSxLQUFLTCxLQUFPTyxFQUNqQkEsRUFBS0osS0FBT0YsS0FBS0ksS0FDakJKLEtBQUtJLEtBQU9FLElBTFpOLEtBQUtHLEtBQU9HLEVBQ1pOLEtBQUtJLEtBQU9FLEVBTWhCLENBRUFDLFdBQVdULEdBQ1QsSUFBSVEsRUFBT04sS0FBS0csS0FFaEIsS0FBT0csR0FDREEsRUFBS1IsUUFBVUEsSUFDYlEsSUFBU04sS0FBS0csTUFDaEJILEtBQUtHLEtBQU9ILEtBQUtHLEtBQUtKLEtBQ3RCQyxLQUFLRyxLQUFLRCxLQUFPLE1BQ1JJLElBQVNOLEtBQUtJLE1BQ3ZCSixLQUFLSSxLQUFPSixLQUFLSSxLQUFLRixLQUN0QkYsS0FBS0ksS0FBS0wsS0FBTyxPQUVqQk8sRUFBS0osS0FBS0gsS0FBT08sRUFBS1AsS0FDdEJPLEVBQUtQLEtBQUtHLEtBQU9JLEVBQUtKLE9BSTFCSSxFQUFPQSxFQUFLUCxJQUVoQixDQUVBUyxRQUNFLElBQUlGLEVBQU9OLEtBQUtHLEtBRWhCLEtBQU9HLEdBQ0xHLFFBQVFDLElBQUlKLEVBQUtSLE9BQ2pCUSxFQUFPQSxFQUFLUCxJQUVoQixzQkFJSyxNQUNMRixjQUNFRyxLQUFLRyxLQUFPLElBQ2QsQ0FFQUUsV0FBV1AsR0FDVCxNQUFNYSxFQUFVLElBQUlmLEVBQUtFLEVBQU8sTUFDaEMsR0FBa0IsT0FBZEUsS0FBS0csS0FDUEgsS0FBS0csS0FBT1EsTUFDUCxDQUNMLElBQUlDLEVBQVVaLEtBQUtHLEtBQ25CLEtBQU9TLEVBQVFiLE1BQ2JhLEVBQVVBLEVBQVFiLEtBRXBCYSxFQUFRYixLQUFPWSxDQUNqQixDQUNGLENBRUFILFFBQ0UsSUFBSUksRUFBVVosS0FBS0csS0FDbkIsS0FBT1MsR0FDTEgsUUFBUUMsSUFBSUUsRUFBUWQsT0FDcEJjLEVBQVVBLEVBQVFiLElBRXRCLENBRUFjLFNBQVNmLEdBQ1AsSUFBSWMsRUFBVVosS0FBS0csS0FDbkIsS0FBT1MsR0FBUyxDQUNkLEdBQUlBLEVBQVFkLFFBQVVBLEVBQ3BCLE9BQU9jLEVBRVRBLEVBQVVBLEVBQVFiLElBQ3BCLENBQ0EsT0FBTyxJQUNULENBRUFlLFdBQVdoQixHQUNULElBQUljLEVBQVVaLEtBQUtHLEtBQ25CLEtBQU9TLEVBQVFkLFFBQVVBLEdBQU8sQ0FDOUIsR0FBSWMsRUFBUWQsUUFBVUEsRUFFcEIsWUFEQWMsRUFBUWQsTUFBUWMsRUFBUWIsS0FBS0EsTUFHL0JhLEVBQVVBLEVBQVFiLElBQ3BCLENBQ0YifQ==